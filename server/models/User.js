const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Sub-schema for skills the user can teach
const SkillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  proficiency: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
    default: 'Intermediate',
  },
});

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters'],
      maxlength: [50, 'Name cannot exceed 50 characters'],
    },

    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^[a-zA-Z0-9._%+-]+@srmist\.edu\.in$/,
        'Only SRM Institute email addresses (@srmist.edu.in) are allowed',
      ],
    },

    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [6, 'Password must be at least 6 characters'],
      select: false, // Never return password in queries by default
    },

    skillsCanTeach: {
      type: [SkillSchema],
      default: [],
    },

    skillsToLearn: {
      type: [String],
      default: [],
    },

    // The core gamification currency of SkillSwap
    knowledgeCredits: {
      type: Number,
      default: 5,
      min: [0, 'Knowledge credits cannot be negative'],
    },

    bio: {
      type: String,
      maxlength: [300, 'Bio cannot exceed 300 characters'],
      default: '',
    },

    avatar: {
      type: String,
      default: '', // URL to avatar image (can integrate Cloudinary later)
    },

    // Metadata
    isVerified: {
      type: Boolean,
      default: false,
    },

    role: {
      type: String,
      enum: ['student', 'admin'],
      default: 'student',
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt
  }
);

// ─── Pre-save Middleware: Hash password before saving ──────────────────────────
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// ─── Instance Method: Compare entered password with hashed password ────────────
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// ─── Static Method: Find user with password included ──────────────────────────
UserSchema.statics.findByEmailWithPassword = function (email) {
  return this.findOne({ email }).select('+password');
};

module.exports = mongoose.model('User', UserSchema);
