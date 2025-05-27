const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true,
        minlength: [3, 'title must be at least 3 characters'],
        maxlength: [50, 'title must be at maximun 50 characters']
    },
    description:{
        type:String,
        required: true,
    },
     category: {
    type: String,
    required: true,
    enum: ["Development", "Design", "Marketing", "Business", "Other"],
    default: "Other",
  },
  thumbnail:{
    public_id:{
        type: String,
        required: true,
    },
    secure_url:{
        types:String,
        required: true,
    }
  },
  lectures:[{
      title:String,
      description: String,
      lecture:{
        public_id: {
            type: String,
           required: true,
            secure_url:String,
            required: true,
        }

      }
  }],

  Nooflecture:{
      type: Number,
      default:0
  },

  createdby:{
      types: String,
      required: true,
  }

    
},
{timestamps:true})

const Course = mongoose.model("Course", userSchema);

module.exports = Course;