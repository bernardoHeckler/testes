import React from "react";
import Card from "../components/Card";
import "./Blog.css";

const Blog = () => {
  return (
    <div>
      <Card />
      <main className="blog-container">
        <section className="blog-section">
          <div className="linha">
            <h2>Blog</h2>
            <div className="barra"></div>
          </div>
          <div className="linha">
            <section className="blog-informacao">
              <img
                src="https://placehold.co/300x150/png"
                alt="Placeholder genérico"
              />
              <div className="text">
                <p className="infoData">Design - Fab 23, 2022</p>
                <h4 className="tituloData">Design Conference in 2022</h4>
                <p className="descricao">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit, nesciunt.
                </p>
              </div>
            </section>
            <section className="blog-informacao">
              <img
                src="https://placehold.co/300x150/png"
                alt="Placeholder genérico"
              />
              <div className="text">
                <p className="infoData">Design - Fab 23, 2022</p>
                <h4 className="tituloData">Design Conference in 2022</h4>
                <p className="descricao">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit, nesciunt.
                </p>
              </div>
            </section>
            <section className="blog-informacao">
              <img
                src="https://placehold.co/300x150/png"
                alt="Placeholder genérico"
              />
              <div className="text">
                <p className="infoData">Design - Fab 23, 2022</p>
                <h4 className="tituloData">Design Conference in 2022</h4>
                <p className="descricao">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit, nesciunt.
                </p>
              </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Blog;
