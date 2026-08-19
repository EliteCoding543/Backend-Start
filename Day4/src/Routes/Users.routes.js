const express = require("express")
const router = express.Router()

const users = [
  { id: 1, name: "Aarav Sharma", age: 22, email: "aarav@gmail.com", city: "Delhi" },
  { id: 2, name: "Vivaan Gupta", age: 24, email: "vivaan@gmail.com", city: "Mumbai" },
  { id: 3, name: "Aditya Verma", age: 21, email: "aditya@gmail.com", city: "Lucknow" },
  { id: 4, name: "Arjun Singh", age: 25, email: "arjun@gmail.com", city: "Kanpur" },
  { id: 5, name: "Rohan Kumar", age: 23, email: "rohan@gmail.com", city: "Delhi" },
  { id: 6, name: "Rahul Yadav", age: 26, email: "rahul@gmail.com", city: "Noida" },
  { id: 7, name: "Aman Mishra", age: 22, email: "aman@gmail.com", city: "Agra" },
  { id: 8, name: "Karan Mehta", age: 27, email: "karan@gmail.com", city: "Jaipur" },
  { id: 9, name: "Vikas Pandey", age: 24, email: "vikas@gmail.com", city: "Varanasi" },
  { id: 10, name: "Nikhil Jain", age: 23, email: "nikhil@gmail.com", city: "Indore" },

  { id: 11, name: "Ankit Sharma", age: 28, email: "ankit@gmail.com", city: "Delhi" },
  { id: 12, name: "Mohit Agarwal", age: 25, email: "mohit@gmail.com", city: "Mumbai" },
  { id: 13, name: "Sahil Khan", age: 22, email: "sahil@gmail.com", city: "Hyderabad" },
  { id: 14, name: "Deepak Singh", age: 29, email: "deepak@gmail.com", city: "Patna" },
  { id: 15, name: "Ravi Kumar", age: 24, email: "ravi@gmail.com", city: "Lucknow" },
  { id: 16, name: "Sumit Verma", age: 26, email: "sumit@gmail.com", city: "Kanpur" },
  { id: 17, name: "Manish Gupta", age: 23, email: "manish@gmail.com", city: "Noida" },
  { id: 18, name: "Harsh Raj", age: 21, email: "harsh@gmail.com", city: "Patna" },
  { id: 19, name: "Yash Tiwari", age: 27, email: "yash@gmail.com", city: "Prayagraj" },
  { id: 20, name: "Akash Sharma", age: 25, email: "akash@gmail.com", city: "Delhi" },

  { id: 21, name: "Priya Singh", age: 23, email: "priya@gmail.com", city: "Lucknow" },
  { id: 22, name: "Neha Gupta", age: 24, email: "neha@gmail.com", city: "Mumbai" },
  { id: 23, name: "Anjali Verma", age: 22, email: "anjali@gmail.com", city: "Delhi" },
  { id: 24, name: "Pooja Sharma", age: 26, email: "pooja@gmail.com", city: "Jaipur" },
  { id: 25, name: "Sneha Jain", age: 25, email: "sneha@gmail.com", city: "Indore" },
  { id: 26, name: "Riya Yadav", age: 21, email: "riya@gmail.com", city: "Agra" },
  { id: 27, name: "Kavya Singh", age: 27, email: "kavya@gmail.com", city: "Noida" },
  { id: 28, name: "Simran Kaur", age: 24, email: "simran@gmail.com", city: "Chandigarh" },
  { id: 29, name: "Muskan Gupta", age: 23, email: "muskan@gmail.com", city: "Kanpur" },
  { id: 30, name: "Nisha Sharma", age: 28, email: "nisha@gmail.com", city: "Delhi" },

  { id: 31, name: "Abhishek Kumar", age: 30, email: "abhishek@gmail.com", city: "Patna" },
  { id: 32, name: "Saurabh Singh", age: 26, email: "saurabh@gmail.com", city: "Lucknow" },
  { id: 33, name: "Varun Gupta", age: 24, email: "varun@gmail.com", city: "Delhi" },
  { id: 34, name: "Tarun Sharma", age: 29, email: "tarun@gmail.com", city: "Mumbai" },
  { id: 35, name: "Ayush Verma", age: 22, email: "ayush@gmail.com", city: "Noida" },
  { id: 36, name: "Shivam Yadav", age: 25, email: "shivam@gmail.com", city: "Agra" },
  { id: 37, name: "Prashant Mishra", age: 27, email: "prashant@gmail.com", city: "Varanasi" },
  { id: 38, name: "Rishabh Jain", age: 23, email: "rishabh@gmail.com", city: "Jaipur" },
  { id: 39, name: "Gaurav Singh", age: 28, email: "gaurav@gmail.com", city: "Kanpur" },
  { id: 40, name: "Vivek Kumar", age: 24, email: "vivek@gmail.com", city: "Delhi" },

  { id: 41, name: "Pankaj Sharma", age: 31, email: "pankaj@gmail.com", city: "Lucknow" },
  { id: 42, name: "Rajat Gupta", age: 26, email: "rajat@gmail.com", city: "Mumbai" },
  { id: 43, name: "Naveen Singh", age: 25, email: "naveen@gmail.com", city: "Delhi" },
  { id: 44, name: "Chirag Verma", age: 22, email: "chirag@gmail.com", city: "Noida" },
  { id: 45, name: "Dev Sharma", age: 23, email: "dev@gmail.com", city: "Agra" },
  { id: 46, name: "Varsha Singh", age: 24, email: "varsha@gmail.com", city: "Jaipur" },
  { id: 47, name: "Ishita Gupta", age: 21, email: "ishita@gmail.com", city: "Delhi" },
  { id: 48, name: "Komal Yadav", age: 27, email: "komal@gmail.com", city: "Kanpur" },
  { id: 49, name: "Tanya Sharma", age: 25, email: "tanya@gmail.com", city: "Mumbai" },
  { id: 50, name: "Shubham Kumar", age: 23, email: "shubham@gmail.com", city: "Delhi" }
];


router.get("/users", (req, res) => {
    try {
        res.json(users)
    } catch (error) {
        res.json({
        err : error.message
      })
    }
})

router.delete("/users", (req, res) => {
    try {
        const removeData = users.pop()
        res.json({
            message : "Data Delete sucessfully...",
            data : removeData
        })
    } catch (error) {
        res.json({
        err : error.message
      })
    }
})

module.exports = {
    userRouter : router
}


