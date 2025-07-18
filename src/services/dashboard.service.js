const { ProfileInfo, Social, Project, Experience, Education, Skill, SoftSkill } = require('../models')

// GET: /all-info/length
// For: admin
exports.getInformationLength = async () => {
  const [
    profileCount,
    socialCount,
    projectCount,
    experienceCount,
    educationCount,
    skillCount,
    softSkillCount
  ] = await Promise.all([
    ProfileInfo.countDocuments(),
    Social.countDocuments(),
    Project.countDocuments(),
    Experience.countDocuments(),
    Education.countDocuments(),
    Skill.countDocuments(),
    SoftSkill.countDocuments()
  ])

  return {
    profileInfo: profileCount,
    social: socialCount,
    project: projectCount,
    experience: experienceCount,
    education: educationCount,
    skill: skillCount,
    softSkill: softSkillCount
  }
}