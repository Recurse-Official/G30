import numpy as np
import pandas as pd

import disease_ml
import bayesian_network


def get_disease_prs(features):

    prs_values = {}

    features['risk_allele_frequency'] = ((features['allele1'] == features['risk_allele']).astype(float) + (features['allele2'] == features['risk_allele']).astype(float))

    refined_features = features.dropna(subset=['odds_ratio']).copy()
    refined_features['mrs'] = features['risk_allele_frequency'] * np.log(features['odds_ratio'])

    prs_values = refined_features.groupby('disease_name')['mrs'].sum().to_dict()
    return prs_values


def  get_disease_prediction(features, prs_values):

    final_features = pd.DataFrame()
    final_features['key'] = features['rsid']+ "_" + features['disease_name']

    final_features['risk_allele_frequency'] = features['risk_allele_frequency'] / 2

    final_features = final_features.transpose()
    final_features.columns = final_features.iloc[0]
    final_features = final_features.drop(final_features.index[0]).reset_index(drop=True)

    predictions = disease_ml.model_output(final_features)
    return predictions


def get_disease_score(patient_data, prs_values):

    network = bayesian_network.MultiDiseaseBayesianNetwork()
    risks = network.predict_disease_risks(evidence)

    evidence = {}

    for disease in prs_values:
        for factor in patient_data:

            if factor == "age":
                if patient_data[factor] > 0 and patient_data[factor] < 25:
                    evidence[factor] = "Young"
                elif patient_data[factor] >= 25 and patient_data[factor] < 50:
                    evidence[factor] = "Middle-aged"
                elif patient_data[factor] >= 50:
                    evidence[factor] = "Old"

            if factor == "gender":
                evidence[factor] = patient_data[factor]

            if factor == "bmi":
                if patient_data[factor] > 0 and patient_data[factor] < 18.5:
                    evidence[factor] = "Underweight"
                elif patient_data[factor] >= 18.5 and patient_data[factor] < 24.9:
                    evidence[factor] = "Normal"
                elif patient_data[factor] >= 24.9 and patient_data[factor] < 29.9:
                    evidence[factor] = "Overweight"
                elif patient_data[factor] >= 29.9:
                    evidence[factor] = "Obese"

            if factor == "aqi":
                evidence[factor] = patient_data[factor]

            if factor == "temperature":
                if patient_data[factor] < 293:
                    evidence[factor] = "Low"
                elif patient_data[factor] >= 293 and patient_data[factor] < 308:
                    evidence[factor] = "Normal"
                elif patient_data[factor] >= 308:
                    evidence[factor] = "High"    

            if factor == "humidity":
                if patient_data[factor] < 40:
                    evidence[factor] = "Low"
                elif patient_data[factor] >= 40 and patient_data[factor] < 70:
                    evidence[factor] = "Normal"
                elif patient_data[factor] >= 70:
                    evidence[factor] = "High"    

            if factor == "sleep":
                if patient_data[factor] < 6:
                    evidence[factor] = "Poor"
                elif patient_data[factor] >= 6 and patient_data[factor] < 8:
                    evidence[factor] = "Adequate"
                elif patient_data[factor] >= 8:
                    evidence[factor] = "Optimal"

            if factor == "exercise":
                if patient_data[factor] < 2:
                    evidence[factor] = "Sedentary"
                elif patient_data[factor] >= 2 and patient_data[factor] < 5:
                    evidence[factor] = "Moderate"
                elif patient_data[factor] >= 5:
                    evidence[factor] = "Active"

            if factor == "gender" or factor == "aqi" or factor == "diet" or factor == "drink" or factor == "smoke":
                evidence[factor] = patient_data[factor]

        risk = network.predict_disease_risks(evidence)
        risks[disease] = risk

    return risks
