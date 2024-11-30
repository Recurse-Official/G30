from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})


USER = os.getenv('user')
PASSWORD = os.getenv('pass')

print(USER, PASSWORD)

client = MongoClient("mongodb://localhost:27017/")
db = client['omniflux']
user_collection = db['userdata']

PORT = 8081

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
def personel_detail():
    try:
        data = request.json
        user_collection.insert_one(data)
        return jsonify({"success": True, "message": "Data saved successfully"})
    except Exception as e:
        return jsonify({"success": False, "message": str(e)})
    
@app.route("/editpersoneldetail", methods=["POST"])
def edit_personel_detail():
    try:
        
        data = request.json
        name = data.get('name')
        mobile = data.get('mobile')
        emailid = data.get("email")
        age = data.get("age")
        weight = data.get("weight")
        height = data.get("height")
        dob = data.get("dob")
        gender = data.get("gender")
        allergies = data.get("allergies")
        illness = data.get("illness")
        medication = data.get("medication")
        date = data.get("date")
        time = data.get("time")

        
        if not emailid:
            return jsonify({"success": False, "message": "Email is required"}), 400

        
        update_fields = {
            "name": name,
            "mobile": mobile,
            "age": age,
            "weight": weight,
            "height": height,
            "dob": dob,
            "gender": gender,
            "allergies": allergies,
            "illness": illness,
            "medication": medication,
            "date": date,
            "time": time
        }

       
        update_fields = {k: v for k, v in update_fields.items() if v is not None}

        user_collection.update_one(
            {"email": emailid}, 
            {"$set": update_fields},  
            upsert=True  
        )

        return jsonify({"success": True, "message": "Personal and appointment details updated successfully"})
    except Exception as e:
        return jsonify({"success": False, "message": str(e)}), 500


@app.route("/appointmentdetail", methods=["POST"])
def appointment_detail():
    try:
        
        data = request.json
        emailid = data.get("email")
        date = data.get("date")
        time = data.get("time")

        
        if not emailid or not date or not time:
            return jsonify({"success": False, "message": "Missing required fields: email, date, or time"}), 400

        
        user_collection.update_one(
            {"email": emailid}, 
            {"$set": {"date": date, "time": time}},  
            upsert=True  
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
