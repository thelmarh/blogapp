import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "./BlogCard";

const BlogList = () => {
  return (
    <Container>
      <Row>
        <Col>
          <BlogCard />
        </Col>
        <Col>
          <BlogCard />
        </Col>
        <Col>
          <BlogCard />
        </Col>
      </Row>
    </Container>
  );
};

export default BlogList;
