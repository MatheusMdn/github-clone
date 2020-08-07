import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import RandomCalendar from "../../components/RandomCalendar";

import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  CalendarHeading,
  RepoIcon,
  Tab,
} from "./styles";
import ProfileData from "../../components/ProfileData";
import RepoCard from "../../components/RepoCard";

function Profile() {
  const { username = "MatheusMdn" } = useParams();
  const [user, setUser] = useState();
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    Promise.all([
      fetch(`http://api.github.com/users/${username}`),
      fetch(`http://api.github.com/users/${username}/repos`),
    ]).then(async (response) => {
      const [userResponse, repoResponse] = response;

      if (userResponse.status === 404) {
        setError("User not found!!");
        return;
      }

      const user = await userResponse.json();
      const repos = await repoResponse.json();

      const shuffledRepos = repos.sort(() => 0.5 - Math.random());
      const slicedRepos = shuffledRepos.slice(0, 6);

      setUser(user);
      setRepos(slicedRepos);
    });
  }, [username]);

  if (error) {
    return <h1>{error}</h1>;
  }

  if (!user || !repos) {
    return <h1>Loading...</h1>;
  }

  const TabContent = () => {
    return (
      <div className="content">
        <RepoIcon />
        <span className="label">Repositories</span>
        <span className="number">{user.public_repos}</span>
      </div>
    );
  };

  return (
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset" />
          <TabContent />
        </div>
        <span className="line" />
      </Tab>

      <Main>
        <LeftSide>
          <ProfileData
            username={user.login}
            name={user.name}
            avatarUrl={user.avatar_url}
            followers={user.followers}
            following={user.following}
            company={user.company}
            location={user.location}
            email={user.email}
            blog={user.blog}
          />
        </LeftSide>
        <RightSide>
          <Tab className="mobile">
            <TabContent />
            <span className="line" />
          </Tab>

          <Repos>
            <h2>Random repos</h2>
            <div>
              {repos.map((item) => (
                <RepoCard
                  key={item.name}
                  username={item.owner.login}
                  reponame={item.name}
                  description={item.description}
                  language={item.language}
                  stars={item.stargazers_count}
                  forks={item.forks}
                />
              ))}
            </div>
          </Repos>
          <CalendarHeading>
            Random calendar (do not repesent actual data)
          </CalendarHeading>

          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
}

export default Profile;
