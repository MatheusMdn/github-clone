import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Breadcrumb,
  RepoIcon,
  Stats,
  StarIcon,
  GithubIcon,
  ForkIcon,
  LinkButton,
} from "./styles";

function Repo() {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link className={"username"} to={"/MatheusMdn"}>
          MatheusMdn
        </Link>
        <span>/</span>
        <Link className={"reponame"} to={"MatheusMdn/Rocketshoes"}>
          Rocketshoes
        </Link>
      </Breadcrumb>
      <p>
        E commerce made with React, Redux, Redux-Saga, styled-components and
        much more ...
      </p>

      <Stats>
        <ul>
          <li>
            <StarIcon />
            <b>9</b>
            <span>stars</span>
          </li>
          <li>
            <ForkIcon />
            <b>0</b>
            <span>forks</span>
          </li>
        </ul>
      </Stats>

      <LinkButton href="https://github.com/MatheusMdn/Rockeshoes">
        <GithubIcon />
        <span>View on Github</span>
      </LinkButton>
    </Container>
  );
}

export default Repo;
