from flask import Flask, request, jsonify
from flask_cors import CORS

from recommender import generate_recommendations

app = Flask(__name__)
CORS(app)


@app.route("/")
def home():
    return jsonify({
        "status": "SkillNova Backend Running"
    })


@app.route("/recommend", methods=["POST"])
def recommend():
    data = request.get_json()

    skills = data.get("skills", [])

    recommendations = generate_recommendations(skills)

    return jsonify(recommendations)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)