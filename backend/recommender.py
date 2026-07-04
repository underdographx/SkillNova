from careers import CAREER_DATABASE


def build_user_profile(selected_skills):
    """
    Convert selected skills to lowercase and remove duplicates.
    """
    return list(set(skill.lower() for skill in selected_skills))


def calculate_match(user_skills, career_skills):
    """
    Calculate similarity score between user skills and career skills.
    """

    matched_skills = []
    missing_skills = []

    for skill in career_skills:
        if skill.lower() in user_skills:
            matched_skills.append(skill)
        else:
            missing_skills.append(skill)

    score = (len(matched_skills) / len(career_skills)) * 100

    confidence = min(round(score + 5, 2), 100)

    return {
        "score": round(score, 2),
        "confidence": confidence,
        "matched_skills": matched_skills,
        "missing_skills": missing_skills
    }


def generate_recommendations(selected_skills):
    """
    Generate career recommendations.
    """

    if not selected_skills:
        return []

    user_profile = build_user_profile(selected_skills)

    recommendations = []

    for career in CAREER_DATABASE:

        result = calculate_match(
            user_profile,
            career["skills"]
        )

        recommendations.append({
            "id": career["id"],
            "career": career["name"],
            "description": career["description"],
            "score": result["score"],
            "confidence": result["confidence"],
            "matched_skills": result["matched_skills"],
            "missing_skills": result["missing_skills"]
        })

    recommendations.sort(
        key=lambda x: x["score"],
        reverse=True
    )

    return recommendations[:5]
