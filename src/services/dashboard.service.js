const { ProfileInfo, Social, Project, Experience, Education, Skill, SoftSkill } = require('../models')

// GET: /all-info/length
// For: admin
exports.getInformationLength = async () => {
    const [profileCount, socialCount, projectCount, experienceCount, educationCount, skillCount, softSkillCount] = await Promise.all([
      ProfileInfo.count(),
      Social.count(),
      Project.count(),
      Experience.count(),
      Education.count(),
      Skill.count(),
      SoftSkill.count()
    ])

    res.json({
      profileInfo: profileCount,
      social: socialCount,
      project: projectCount,
      experience: experienceCount,
      education: educationCount,
      skill: skillCount,
      softSkill: softSkillCount
    });
}