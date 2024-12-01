from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
from pymongo import MongoClient
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
import gridfs
from bson import ObjectId


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})


USER = os.getenv('user')
PASSWORD = os.getenv('pass')


client = MongoClient("mongodb://localhost:27017/")
db = client['omniflux']
user_collection = db['userdata']

fs = gridfs.GridFS(db)

# with open("example.pdf", "rb") as pdf_file:
#     file_id = fs.put(pdf_file, filename="example.pdf", content_type="application/pdf", metadata={"author": "John Doe", "description": "Sample PDF"})
# print(f"PDF stored with ID: {file_id}")

# Search for a PDF by metadata
# pdf = fs.find_one({"metadata.author": "John Doe"})
# if pdf:
#     print(f"Found PDF: {pdf.filename}")
# else:
#     print("PDF not found!")

PORT = 8080


# @app.route('/get-pdf/<file_id>', methods=['GET'])
# def get_pdf(file_id):
#     try:
#         # Retrieve the file from GridFS
#         file = fs.find_one({"_id": ObjectId(file_id)})
#         if not file:
#             return jsonify({"error": "File not found"}), 404

#         # Send the file to the frontend
#         return send_file(
#             file,
#             download_name=file.filename,
#             as_attachment=True,
#             mimetype="application/pdf"
#         )
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500
    
def send_email(recipient, subject, html_content):
    try:

        msg = MIMEMultipart()
        msg['From'] = f"Omniflux Support <{USER}>"
        msg['To'] = recipient
        msg['Subject'] = subject

        msg.attach(MIMEText(html_content, 'html'))

    
        with smtplib.SMTP('smtp.gmail.com', 587) as server:
            server.starttls()
            server.login(USER, PASSWORD)
            server.sendmail(USER, recipient, msg.as_string())
        
        return True
    except Exception as e:
        print(f"Error sending email: {e}")
        return False


@app.route("/personeldetail", methods=["POST"])
def manage_personel_detail():
    try:
        # Parse incoming JSON data
        data = request.json
        emailid = data.get("email")

        if not emailid:
            return jsonify({"success": False, "message": "Email is required"}), 400

        # Fields to be updated or inserted
        update_fields = {
            "name": data.get("name"),
            "mobile": data.get("mobile"),
            "age": data.get("age"),
            "weight": data.get("weight"),
            "height": data.get("height"),
            "dob": data.get("dob"),
            "gender": data.get("gender"),
            "allergies": data.get("allergies"),
            "illness": data.get("illness"),
            "medication": data.get("medication"),
            "date": data.get("date"),
            "time": data.get("time"),
            "location": data.get("location"),
        }

        # Remove fields with `None` values
        update_fields = {k: v for k, v in update_fields.items() if v is not None}

        # Check if the email exists in the database
        user_exists = user_collection.find_one({"email": emailid})

        if user_exists:
            # If the user exists, update the existing document
            user_collection.update_one(
                {"email": emailid},
                {"$set": update_fields},
                upsert=True  # This ensures the document is created if it doesn't exist
            )
            message = "User details updated successfully"
        else:
            # If the user does not exist, insert a new document
            update_fields["email"] = emailid  # Ensure email is part of the new document
            user_collection.insert_one(update_fields)
            message = "User details added successfully"

        return jsonify({"success": True, "message": message})
    except Exception as e:
        return jsonify({"success": False, "message": str(e)}), 500

@app.route("/appointmentdetail", methods=["POST"])
def appointment_detail():
    try:
        data = request.json
        emailid = data.get("email")
        date = data.get("date")
        time = data.get("time")
        location = data.get("location")

        if not emailid or not date or not time:
            return jsonify({"success": False, "message": "Missing required fields: email, date, or time"}), 400

        # Update the user's appointment details
        user_collection.update_one(
            {"email": emailid},  # Find user by email
            {"$set": {"date": date, "time": time, "location": location}},  # Update fields
            upsert=True  # Insert if the user doesn't exist
        )

        return jsonify({"success": True, "message": "Appointment details updated successfully"})
    except Exception as e:
        return jsonify({"success": False, "message": str(e)}), 500



    
@app.route("/sendalldetails", methods=['GET'])
def send_all_details():
    try:
        
        users = list(user_collection.find())
        
    
        for user in users:
            user["_id"] = str(user["_id"])

        return jsonify({"success": True, "data": users})
    except Exception as e:
        return jsonify({"success": False, "message": str(e)})
    
@app.route("/senddetails/<emailid>", methods=['GET'])
def send_details(emailid):
    try:
        
        users = list(user_collection.find({"email": emailid}))
        
    
        for user in users:
            user["_id"] = str(user["_id"])

        return jsonify({"success": True, "data": users})
    except Exception as e:
        return jsonify({"success": False, "message": str(e)})


@app.route("/sendapprovemail/<emailid>", methods=["POST"])
def send_approve_email(emailid):
    try:
        
        user_collection.update_one(
            {"email": emailid}, 
            {"$set": {"status": "approved"}},  
            upsert=True 
        )

        # Email content
        html_content = f"""
            <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
                <h2 style="color: #4CAF50;">Appointment Update</h2>
                <p>Dear <b>{emailid.split('@')[0]}</b>,</p>
                <p>Your request has been <b>approved</b>. Thank you for choosing Omniflux!</p>
            </div>
        """

        
        if send_email(emailid, "Your Appointment Result with Omniflux", html_content):
            return jsonify({"success": True, "message": "Email sent successfully"})
        else:
            return jsonify({"success": False, "message": "Failed to send email"})

    except Exception as e:
        return jsonify({"success": False, "message": str(e)})


@app.route("/sendrejectmail/<emailid>", methods=["POST"])
def send_reject_email(emailid):
    print(emailid)
    try:
        
        user_collection.update_one(
            {"email": emailid},  
            {"$set": {"status": "rejected"}},  
            upsert=True  
        )

        
        html_content = f"""
            <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
                <h2 style="color: #D32F2F;">Appointment Update</h2>
                <p>Dear <b>{emailid.split('@')[0]}</b>,</p>
                <p>We regret to inform you that your appointment request has been <b>rejected</b>. Please contact support for further details.</p>
            </div>
        """

        
        if send_email(emailid, "Your Appointment Request with Omniflux", html_content):
            return jsonify({"success": True, "message": "Rejection email sent successfully"})
        else:
            return jsonify({"success": False, "message": "Failed to send rejection email"})

    except Exception as e:
        return jsonify({"success": False, "message": str(e)})


if __name__ == "__main__":
    app.run(port=PORT, debug=True)
