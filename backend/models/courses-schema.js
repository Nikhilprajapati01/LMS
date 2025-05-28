const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    title:{
        type:String,
          required: [true, 'Title is required'],
        minlength: [3, 'title must be at least 3 characters'],
        maxlength: [50, 'title must be at maximun 50 characters']
    },
    description:{
        type:String,
          required: [true, 'description is required'],
    },
     category: {
    type: String,
      required: [true, 'category is required'],
    enum: ["Development", "Design", "Marketing", "Business", "Other"],
    default: "Other",
  },
 thumbnail: {
  public_id: {
    type: String,
    required: [true, 'Thumbnail ID is required'],
  },
  secure_url: {
    type: String,
    required: [true, 'Thumbnail URL is required'],
  }
},

  lectures:[{
      title:String,
      description: String,
      lecture:{
        public_id: {
            type: String,
             required: [true, 'lecture is required'],
            secure_url:String,
            
        }

      }
  }],

  Nooflecture:{
      type: Number,
      default:0
  },

  createdby:{
      types: String,
        // required: [true, 'Title is required'],
  }

    
},
{timestamps:true})

const Course = mongoose.model("Course", userSchema);

module.exports = Course;