import React, { useState } from 'react';
import "./Internship.css";
import Header from './Header';
import { a } from './Profile';
import { b } from './Login';

const Internship = () => {
  const [score, setScore] = useState(a);
  const [appliedButtons, setAppliedButtons] = useState([false, false, false, false]);

  const names = ["Software Engineer", "Software Developer", "Software Developer", "Software Engineer","Software Tester", "Software Engineer", "UI/UX Designer", "Software Developer", "Full Stack Developer", "Data Analyst","Full Stack Developer", "Software Developer", "Software Engineer","Software Engineer", "Software Developer", "Software Developer", "Software Engineer","Software Tester", "Software Engineer", "UI/UX Designer", "Software Developer", "Full Stack Developer", "Data Analyst","Full Stack Developer", "Software Developer", "Software Engineer","Software Engineer", "Software Developer", "Software Developer", "Software Engineer","Software Tester", "Software Engineer", "UI/UX Designer", "Software Developer", "Full Stack Developer", "Data Analyst","Full Stack Developer", "Software Developer", "Software Engineer","Software Engineer", "Software Developer", "Software Developer", "Software Engineer","Software Tester", "Software Engineer", "UI/UX Designer", "Software Developer", "Full Stack Developer", "Data Analyst","Full Stack Developer", "Software Developer", "Software Engineer","Software Engineer", "Software Developer", "Software Developer", "Software Engineer","Software Tester", "Software Engineer", "UI/UX Designer", "Software Developer", "Full Stack Developer", "Data Analyst","Full Stack Developer", "Software Developer", "Software Engineer","Software Engineer", "Software Developer", "Software Developer", "Software Engineer","Software Tester", "Software Engineer", "UI/UX Designer", "Software Developer", "Full Stack Developer", "Data Analyst","Full Stack Developer", "Software Developer", "Software Engineer","Software Engineer", "Software Developer", "Software Developer", "Software Engineer","Software Tester", "Software Engineer", "UI/UX Designer", "Software Developer", "Full Stack Developer", "Data Analyst","Full Stack Developer", "Software Developer", "Software Engineer","Software Engineer", "Software Developer", "Software Developer", "Software Engineer","Software Tester", "Software Engineer", "UI/UX Designer", "Software Developer", "Full Stack Developer"];
  const company = ["Google","TCS","Wipro","JP Morgan","Deloitte","Oracle","Myntra", "Microsoft" , "Zomato" , "Accenture" , "Tech Mahindra" , "Swiggy","Amazon","Google","TCS","Wipro","JP Morgan","Deloitte","Oracle","Myntra", "Microsoft" , "Zomato" , "Accenture" , "Tech Mahindra" , "Swiggy","Amazon","Google","TCS","Wipro","JP Morgan","Deloitte","Oracle","Myntra", "Microsoft" , "Zomato" , "Accenture" , "Tech Mahindra" , "Swiggy","Amazon","Google","TCS","Wipro","JP Morgan","Deloitte","Oracle","Myntra", "Microsoft" , "Zomato" , "Accenture" , "Tech Mahindra" , "Swiggy","Amazon","Google","TCS","Wipro","JP Morgan","Deloitte","Oracle","Myntra", "Microsoft" , "Zomato" , "Accenture" , "Tech Mahindra" , "Swiggy","Amazon","Google","TCS","Wipro","JP Morgan","Deloitte","Oracle","Myntra", "Microsoft" , "Zomato" , "Accenture" , "Tech Mahindra" , "Swiggy","Amazon","Google","TCS","Wipro","JP Morgan","Deloitte","Oracle","Myntra", "Microsoft" , "Zomato" , "Accenture" , "Tech Mahindra" , "Swiggy","Amazon","Google","TCS","Wipro","JP Morgan","Deloitte","Oracle","Myntra", "Microsoft" , "Zomato"]
  const images = ["./images/Google.png", "./images/TCS.webp", "./images/Wipro.png","./images/JP.webp", "./images/Deloitte.png", "./images/Oracle.jpg", "./images/Myntra.png" , "./images/Microsoft.avif" , "./images/Zomato.png" , "./images/Accenture.png" , "./images/Tech.jpg" , "./images/Swiggy.png", "./images/Amazon.png","./images/Google.png", "./images/TCS.webp", "./images/Wipro.png","./images/JP.webp", "./images/Deloitte.png", "./images/Oracle.jpg", "./images/Myntra.png" , "./images/Microsoft.avif" , "./images/Zomato.png" , "./images/Accenture.png" , "./images/Tech.jpg" , "./images/Swiggy.png", "./images/Amazon.png","./images/Google.png", "./images/TCS.webp", "./images/Wipro.png","./images/JP.webp", "./images/Deloitte.png", "./images/Oracle.jpg", "./images/Myntra.png" , "./images/Microsoft.avif" , "./images/Zomato.png" , "./images/Accenture.png" , "./images/Tech.jpg" , "./images/Swiggy.png", "./images/Amazon.png","./images/Google.png", "./images/TCS.webp", "./images/Wipro.png","./images/JP.webp", "./images/Deloitte.png", "./images/Oracle.jpg", "./images/Myntra.png" , "./images/Microsoft.avif" , "./images/Zomato.png" , "./images/Accenture.png" , "./images/Tech.jpg" , "./images/Swiggy.png", "./images/Amazon.png","./images/Google.png", "./images/TCS.webp", "./images/Wipro.png","./images/JP.webp", "./images/Deloitte.png", "./images/Oracle.jpg", "./images/Myntra.png" , "./images/Microsoft.avif" , "./images/Zomato.png" , "./images/Accenture.png" , "./images/Tech.jpg" , "./images/Swiggy.png", "./images/Amazon.png","./images/Google.png", "./images/TCS.webp", "./images/Wipro.png","./images/JP.webp", "./images/Deloitte.png", "./images/Oracle.jpg", "./images/Myntra.png" , "./images/Microsoft.avif" , "./images/Zomato.png" , "./images/Accenture.png" , "./images/Tech.jpg" , "./images/Swiggy.png", "./images/Amazon.png","./images/Google.png", "./images/TCS.webp", "./images/Wipro.png","./images/JP.webp", "./images/Deloitte.png", "./images/Oracle.jpg", "./images/Myntra.png" , "./images/Microsoft.avif" , "./images/Zomato.png" , "./images/Accenture.png" , "./images/Tech.jpg" , "./images/Swiggy.png", "./images/Amazon.png","./images/Google.png", "./images/TCS.webp", "./images/Wipro.png","./images/JP.webp", "./images/Deloitte.png", "./images/Oracle.jpg", "./images/Myntra.png" , "./images/Microsoft.avif" , "./images/Zomato.png"];
  const salary = ["20-25 LPA","4-6 LPA","3-5 LPA","15-20 LPA","8-12 LPA","10-12 LPA","6-10 LPA","25-30 LPA", "12-14 LPA","4-6 LPA","6-10 LPA","6-8 LPA","30-35 LPA","20-25 LPA","4-6 LPA","3-5 LPA","15-20 LPA","8-12 LPA","10-12 LPA","6-10 LPA","25-30 LPA", "12-14 LPA","4-6 LPA","6-10 LPA","6-8 LPA","30-35 LPA","20-25 LPA","4-6 LPA","3-5 LPA","15-20 LPA","8-12 LPA","10-12 LPA","6-10 LPA","25-30 LPA", "12-14 LPA","4-6 LPA","6-10 LPA","6-8 LPA","30-35 LPA","20-25 LPA","4-6 LPA","3-5 LPA","15-20 LPA","8-12 LPA","10-12 LPA","6-10 LPA","25-30 LPA", "12-14 LPA","4-6 LPA","6-10 LPA","6-8 LPA","30-35 LPA","20-25 LPA","4-6 LPA","3-5 LPA","15-20 LPA","8-12 LPA","10-12 LPA","6-10 LPA","25-30 LPA", "12-14 LPA","4-6 LPA","6-10 LPA","6-8 LPA","30-35 LPA","20-25 LPA","4-6 LPA","3-5 LPA","15-20 LPA","8-12 LPA","10-12 LPA","6-10 LPA","25-30 LPA", "12-14 LPA","4-6 LPA","6-10 LPA","6-8 LPA","30-35 LPA","20-25 LPA","4-6 LPA","3-5 LPA","15-20 LPA","8-12 LPA","10-12 LPA","6-10 LPA","25-30 LPA", "12-14 LPA","4-6 LPA","6-10 LPA","6-8 LPA","30-35 LPA","20-25 LPA","4-6 LPA","3-5 LPA","15-20 LPA","8-12 LPA","10-12 LPA","6-10 LPA","25-30 LPA", "12-14 LPA"]
  const experience = ["1-2 Years","0-2 Years","0-2 Years","2-4 Years","0-2 Years","1-2 Years","2-4 Years","4+ Years","3-6 Years","0-2 Years","2-3 Years","0-2 Years","5+ Years","1-2 Years","0-2 Years","0-2 Years","2-4 Years","0-2 Years","1-2 Years","2-4 Years","4+ Years","3-6 Years","0-2 Years","2-3 Years","0-2 Years","5+ Years","1-2 Years","0-2 Years","0-2 Years","2-4 Years","0-2 Years","1-2 Years","2-4 Years","4+ Years","3-6 Years","0-2 Years","2-3 Years","0-2 Years","5+ Years","1-2 Years","0-2 Years","0-2 Years","2-4 Years","0-2 Years","1-2 Years","2-4 Years","4+ Years","3-6 Years","0-2 Years","2-3 Years","0-2 Years","5+ Years","1-2 Years","0-2 Years","0-2 Years","2-4 Years","0-2 Years","1-2 Years","2-4 Years","4+ Years","3-6 Years","0-2 Years","2-3 Years","0-2 Years","5+ Years","1-2 Years","0-2 Years","0-2 Years","2-4 Years","0-2 Years","1-2 Years","2-4 Years","4+ Years","3-6 Years","0-2 Years","2-3 Years","0-2 Years","5+ Years","1-2 Years","0-2 Years","0-2 Years","2-4 Years","0-2 Years","1-2 Years","2-4 Years","4+ Years","3-6 Years","0-2 Years","2-3 Years","0-2 Years","5+ Years","1-2 Years","0-2 Years","0-2 Years","2-4 Years","0-2 Years","1-2 Years","2-4 Years","4+ Years","3-6 Years"]

  const handleApply = (index) => {
    if (score >= 50 && !appliedButtons[index]) {
      setScore(score - 50);

      setAppliedButtons((prevButtons) => {
        const updatedButtons = [...prevButtons];
        updatedButtons[index] = true;
        return updatedButtons;
      });

      alert('Successfully Applied!');
    } else if (appliedButtons[index]) {
      alert('Already Applied!');
    } else {
      alert('Score is less than 20. Cannot apply!');
    }
  };

  const handleLogout = () => {
    alert('Logout clicked');
  };

  return (
    <div className='internship'>
      <Header totalScore={score} userVariable={b} onLogout={handleLogout} />
      <div className='coins'><p>*Apply using 50 coins</p></div>

      <div className='whole'>
        {[0, 1, 2, 3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99].map((index) => (
          <div className='container' key={index}>
            <p>{names[index]}</p>
            <p>Company: {company[index]}</p>
            <img src={images[index]} alt={`Image ${index + 1}`} />
            <p>{salary[index]}</p>
            <p>Exp: {experience[index]}</p>
            <button
              onClick={() => handleApply(index)}
              disabled={score < 50 || appliedButtons[index]}
            >
              {appliedButtons[index] ? 'Applied' : 'Apply'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Internship;


