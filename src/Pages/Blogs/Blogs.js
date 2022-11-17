import React, { useState } from "react";
import "./Blogs.Module.css";
import { data } from "./BlogApi";
import Blog from "./Blog";
import { Link } from "react-router-dom";
import useTitle from "../../Hook/useTitle";

const Blogs = () => {
  useTitle('Blogs')
  const [questions, setQuestions] = useState(data);
  return (
    <div>
        <h1 className="text-center text-4xl mt-5 font-bold text-slate-700">Blogs</h1>
      <div>
        <div className="accordion">
          <h3>Increase Your Knowledge</h3>
          <section className="info">
            {questions.map((question) => (
              <Blog key={question.id} {...question} />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
