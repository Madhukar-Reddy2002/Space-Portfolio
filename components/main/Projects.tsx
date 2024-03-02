import React from "react";
import ProjectCard from "../sub/ProjectCard";
import ProjectCardVideo from "../sub/ProjectCardVideo";

const Projects = () => {
  return (
    <div
      className="relative top-[-400px] flex flex-col items-center justify-center z-30"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="w-full flex flex-wrap items-center justify-center gap-10 px-10 ">
        <ProjectCardVideo
          src="/airbnb.mp4"
          title="Airbnb hotel stats"
          description="This project analyzes Airbnb data for New York City to gain insights into pricing, ratings,
           and availability. The analysis looks at trends over time and comparisons between boroughs and 
           neighborhoods. Visualizations are created in Python to showcase findings like average price per night
            in different areas and peak rental seasons. The code implements data cleaning, aggregation,
            and statistical analysis to find key takeaways."
          appLink="https://public.tableau.com/app/profile/dandu.madhukar.reddy/viz/Airbnb_16769177400560/Dashboard1"
          sourceCodeLink="https://public.tableau.com/app/profile/dandu.madhukar.reddy/viz/Airbnb_16769177400560/Dashboard1"
        />
        <ProjectCardVideo
          appLink="https://public.tableau.com/app/profile/dandu.madhukar.reddy/viz/NETFLIX_16767861321990/Dashboard2"
          sourceCodeLink="https://public.tableau.com/app/profile/dandu.madhukar.reddy/viz/NETFLIX_16767861321990/Dashboard2"
          src="/netflix.mp4"
          title="Netflix  movie stats"
          description="This project performs an exploratory data analysis on the Netflix movie dataset to understand 
          trends in ratings, release years, durations, and genres over time. Insights include the production of
           Netflix originals annually, the highest rated genres, and popularity of film lengths. 
           The Python code loads the data, handles missing values, calculates aggregates,
          and plots visualizations to highlight patterns."
        />
        <ProjectCardVideo
          appLink="https://public.tableau.com/app/profile/dandu.madhukar.reddy/viz/HRAnalytics_16762255106770/Dashboard2"
          sourceCodeLink="https://public.tableau.com/app/profile/dandu.madhukar.reddy/viz/HRAnalytics_16762255106770/Dashboard2"
          src="/hrdata.mp4"
          title="HR data  analytics"
          description="This HR analytics project analyzes employee data to predict attrition risk.
           The Python code implements preprocessing techniques like encoding categorical variables 
           and handling missing data. A classification model is trained and evaluated using metrics like accuracy,
            precision, and recall. Key findings examine factors like department, education, age group,
           and gender that are associated with employees leaving the company."
        />
        <ProjectCardVideo
          appLink="https://public.tableau.com/app/profile/dandu.madhukar.reddy/viz/IPL_16771263300350/Dashboard5"
          sourceCodeLink="https://public.tableau.com/app/profile/dandu.madhukar.reddy/viz/IPL_16771263300350/Dashboard5"
          src="/ipl.mp4"
          title="IPL 2008-2020 stats"
          description="This code analyzes Indian Premier League cricket data from 2008-2020.
          It calculates summary statistics on team performance like wins, losses, runs scored,
           wickets taken, and more. For each season, it determines the winning team, orange cap holder, 
           purple cap holder, and top scorers. The analysis also provides player-level statistics like total runs,
            wickets, fours, sixes, and average. Interactive visualizations showcase insights."
        />
        <ProjectCardVideo
          appLink="https://weather-360.vercel.app/"
          sourceCodeLink="https://github.com/Madhukar-Reddy2002/weather-360"
          src="/weather360.mp4"
          title="Weather Anywhere"
          description="This weather application allows users to enter a city name and view the current weather
           plus a 7-day forecast. It uses a weather API to fetch real-time data on temperature, 
           humidity, weather condition etc. The frontend is built with React and displays suggestions
            for city names as the user types. The backend uses FastAPI and caches API responses. Overall, 
            it provides an easy way to check weather in any location."
        />
        <ProjectCardVideo
          appLink="https://sentiment-app-omega.vercel.app/"
          sourceCodeLink="https://github.com/Madhukar-Reddy2002/sentimentAPP"
          src="/sentiment.mp4"
          title="Sentiment Analysis"
          description="This app performs sentiment analysis on text data using Python's TextBlob.
           The React frontend allows users to enter text like reviews. The FastAPI backend handles routing 
           and interfaces with TextBlob to predict if the sentiment is positive, negative, or neutral.
           Key pieces include data preprocessing, model evaluation, and displaying sentiment outputs to the user."
        />
        <ProjectCardVideo
          appLink="https://github.com/Madhukar-Reddy2002/pintrest"
          sourceCodeLink="https://github.com/Madhukar-Reddy2002/pintrest"
          src="/pintrest.mp4"
          title="Pixel-X"
          description="This project replicates core Pinterest functionality. Users can sign up, 
          create boards, upload and save images (pinning), and browse other pins. 
          The frontend uses React and Tailwind for smooth drag-and-drop interactions. 
          The backend is Django which handles user accounts, boards, pins, and more.
          Image uploads leverage cloud storage. Overall, it demonstrates building a Pinterest-like platform."
        />
        <ProjectCardVideo
          appLink="https://github.com/Madhukar-Reddy2002/freshersHUB"
          sourceCodeLink="https://github.com/Madhukar-Reddy2002/freshersHUB"
          src="/fresherhub.mp4"
          title="Lancer-hub"
          description="Lancer hub allows freelancers to create profiles and connect with clients.
           Freelancers can showcase their skills, experience, and portfolios. Clients can search profiles,
            post jobs, and hire freelancers for projects. Key features include user dashboards, search, 
            messaging, reviews and ratings. The tech stack uses React, Node, Express, and MongoDB to cover the full stack."
        />
        <a href="https://movie-s-seven.vercel.app/">
        <ProjectCard
          src="/pika-show.png"
          title="Pika Show"
          description="This movie website lets users search and browse movies, 
          view details like ratings and trailers, and save favorites. 
          The homepage showcases trending and top-rated movies. Movie pages display cast, ratings, 
          summaries, and streaming services. Saved favorites are stored for each user account. 
          Overall, it allows discovering and learning more about movies conveniently in one place."
        />
        </a>
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Portfolio"
          description="This is a personal portfolio website with a space theme.
           It highlights projects and skills on different pages styled with space backgrounds and elements. 
           The tech stack uses Next.js, TailwindCSS, and Framer Motion.
            Cool animations and visuals create an immersive experience. 
            The project demonstrates front-end development skills."
        />
      </div>
    </div>
  );
};

export default Projects;
