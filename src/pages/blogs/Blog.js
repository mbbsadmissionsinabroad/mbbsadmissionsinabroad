import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./Blog.css";
import blogs from "./blogs.json";
import { Link } from "react-router-dom";
import DocumentMeta from "react-document-meta";

function Blog() {

  const meta = {
    title: "Blog",
    description: "Blog",
    canonical: "https://www.mbbsadmissionsinabroad.com/blog",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "Blog",
      },
    },
  };
  

  return (
    <DocumentMeta {...meta}>
    <div>
      <div className="service__bg">
        <h1 className="service__title">Blog</h1>
      </div>
      <Container>
        <Row>
          {blogs.map((el) => {
            return (
              <Col md={4} key={el.id}>
                <Link to={el.url}>
                  <div className="blog-card">
                    <div className="badge">{el.category}</div>
                    <div className="blog-tumb">
                      <img src={el.image} alt={el.title} />
                    </div>
                    <div className="blog-details">
                      <h4>{el.title}</h4>
                    </div>
                    <div className="blog-author">
                      <img src="/assets/DL.png" alt="" />
                      <p>{el.author}</p>
                    </div>
                  </div>
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
    </DocumentMeta>
  );
}

export default Blog;
