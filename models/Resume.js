import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema(
  {
    userEmail: String,
    templateId: Number,
    resumeData: {
      profile: {
        name: String,
        role: String,
        contact: String,
        summary: String,
      },
      education: [
        {
          degree: String,
          institution: String,
          start: String,
          end: String,
        },
      ],
      experience: [
        {
          role: String,
          company: String,
          start: String,
          end: String,
          description: [String],
        },
      ],
      projects: [
        {
          name: String,
          link: String,
          description: String,
        },
      ],
      skills: [String],
    },
  },
  { timestamps: true }
);

const Resume = mongoose.models.Resume || mongoose.model("Resume", resumeSchema);
export default Resume;
