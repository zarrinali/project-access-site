import './Module.css';
import './ModuleOneContent.css';
import React from 'react';
import SideNav from '../CourseSideNav/CourseSideNav';

function ModuleOneContent() {
  return (
    <div className="Module">
      <SideNav />
      <div className="content">
        <div className="title">
          <h1 id="title">Module 1: Why do you want to apply to a top university?</h1>
        </div>

        <div className="container description">
          <h2 className="subheading">Overview</h2>
          <ul className="description-content">
            <li>
              This module is all about you! Why do you want to apply to a top university? Motivation
              can vary widely for different people – from wanting to study a specific subject, over
              career ambitions, to interests to learn from specific academics.
            </li>
            <li>
              Your motivation might change over time, but getting clear on why you want to apply is
              important
            </li>
            <li>(a) for your own dedication and</li>
            <li>(b) as a grounding for a successful application.</li>
            <li>
              Result: I know why you want to apply for top universities and what you expect from
              this.
            </li>
          </ul>
        </div>

        <div className="container intro">
          <h2 className="subheading">Introduction</h2>
          <ul className="intro-content">
            <li>
              Applying to top universities is an <i>ambitious</i> goal. However, this doesn’t mean
              it’s only for a certain type of person or that there’s any specific set of qualities
              you must fulfil. Instead, and above all, it requires you to know why you want to do
              that. There are a myriad of different reasons why one might want to apply for a top
              university, and there’s no “right” or “wrong” reasons.
            </li>
            <div id="webinar-video">
              <iframe
                title="webinar"
                src="https://www.youtube.com/embed/tFjkXY7wNBw"
                allowFullScreen
              ></iframe>
              <p>Project Access Webinar - Dein Talent, Dein Weg</p>
            </div>
            <li>
              What matters, is that you become progressively aware of what your reasons are when
              crafting your application. The simple reason is that your application will only be
              convincing if you can clearly demonstrate why you want to apply for that specific
              course at that specific university. However, before thinking about specific subjects
              or universities, you will want to think about what drives you on a more general level?
              For some people, it’s because they’re particularly passionate about a specific
              subject. If that’s the case for you, you should think about why your’re so interested
              in that specific subject. For other people, entirely different reasons play a role.
              Maybe they simply want the experience of studying at a top university? If that’s the
              case for you, you should think about what precisely it is you’re looking to
              experience.
            </li>
            <li>
              Every university is different, and so are subjects at different universities. So,
              before thinking about what and where to study, you should think about what’s important
              TO YOU, irrespective of what specific universities offer, in order to identify your
              criteria for choosing the right course.
            </li>
            <iframe
              title="study-abroad"
              src="https://www.youtube.com/embed/XIVemg7_pXs"
              allowFullScreen
            ></iframe>
            <p>Project Access Webinar on why to study abroad</p>
          </ul>
        </div>

        <div className=" container resources">
          <h2 className="subheading">Resources</h2>
          <ul className="resouces-content">
            <li>
              Your interests are an important component of your motivation. As it turns out, you can
              also develop them. Crucially, it matters a great deal for you to be successful whether
              you’re interested in a subject.
            </li>
            <li>
              read{' '}
              <a
                id="article"
                href="https://static1.squarespace.com/static/5aba8fd525bf020ddb5ec97a/t/5ea3179805de50150d46e57a/1587746712935/interest_development_and_learning.pdf"
              >
                this paper about Interest Development and Learning.
              </a>
            </li>
            <li>
              It’s useful to know more about what motivation is before thinking about what motivates
              you. In particular, it’s crucial to understand the difference between extrinsic and
              intrinsic motivation. It’s good to have both. However, to get through a 3-4 year
              degree of hard work and studying, it’s good to have some level of intrinsic
              motivation.
            </li>
            <li>
              read{' '}
              <a
                id="article"
                href="https://static1.squarespace.com/static/5aba8fd525bf020ddb5ec97a/t/5ea3167c6389d14ba0b7cb96/1587746434012/Intrinsic_and_Extrinsic_Motivation_The_Search_for_..._----_%28Chapter_5._The_Structure_and_Substance_of_Intrinsic_Motivation%29.pdf"
              >
                {' '}
                this paper about the Structure and Substance of Intrinsic Motivation{' '}
              </a>
            </li>
            <li>
              read{' '}
              <a
                id="article"
                href="https://static1.squarespace.com/static/5aba8fd525bf020ddb5ec97a/t/5ea316b9d031f06f37dec6b8/1587746494892/Intrinsic_and_Extrinsic_Motivation_The_Search_for_..._----_%28Chapter_9._Achievement_Goals_and_Optimal_Motivation_A_Multiple_Goals_A...%29.pdf"
              >
                {' '}
                this paper about Achievement Goals and Optimal Motivation
              </a>
            </li>
            <iframe
              title="stevejobs"
              src="https://www.youtube.com/embed/UF8uR6Z6KLc"
              allowFullScreen
            ></iframe>
            <li>
              To get some inspiration about how different people made their way to top universities,
              read the following Project Access Austria blog articles:
            </li>
            <li>
              <a href="https://austria.projectaccess.co/blog/mein-weg-zum-studium-am-ucl-university-college-london">
                Mein Weg and die UCL
              </a>
            </li>
            <li>
              <a href="http://austria.projectaccess.co/blog/christoph">
                Team Member: Christoph (KCL)
              </a>
            </li>
            <li>
              <a href="http://austria.projectaccess.co/blog/jamie">
                Team Member: Jamie (Cambridge)
              </a>
            </li>
            <li>
              You can find more <a href="http://austria.projectaccess.co/blog">blog stories</a>{' '}
              here.
            </li>
            <li>
              <div className="videos">
                <iframe
                  title="tedtalk1"
                  frameborder="0"
                  src="https://youtube.com/embed/vVsXO9brK7M"
                  allowFullScreen
                ></iframe>
                <iframe
                  title="tedtalk2"
                  frameborder="0"
                  src="https://youtube.com/embed/bRtBHF-WPpM"
                  allowFullScreen
                ></iframe>
              </div>
            </li>
          </ul>
        </div>

        <div className="container tasks">
          <h2 className="subheading">Tasks</h2>
          <div className="tasks-content">
            <p>
              The tasks here will require you to work consistently over 2-3 weeks. You don’t achieve
              a deep level of reflection by sitting down for an hour or two. Instead, you should
              take the time you need to listen to yourself and find out what drives you. The weeks
              are only a suggestion and you can do this in your own time, depending on how much time
              you still have available. Here’s a suggestion of how you could proceed. To work on
              this, we recommend you get a notebook in which you can write down what comes to your
              mind with pen and paper. You will be able to use this notebook as a valuable tool for
              other tasks in this online course.
            </p>
            <h3> Step 1: Taking Stock </h3>
            <ol id="step">
              <li>
                {' '}
                1. What are your existing interests? Create a list in your notebook to write down
                your interests. This can be interests in any area, including your hobbies or simply
                what you like doing throughout the day. Add new items to the list as they come to
                your mind. Make sure to think about this every day of the week, and add new items as
                you think of them.
              </li>
              <li>
                {' '}
                2. What motivates you every day? You can do this in the form of a diary, but there’s
                no need for that. Simply write down the things that motivated you to do stuff -
                whatever that was - throughout the day.
              </li>
              <li>
                {' '}
                3. What doesn’t interest you? Which topics or activities do you find boring? This
                list is just as important!{' '}
              </li>
              <li>
                {' '}
                4. What demotivates you? What are the events or happenings you perceive to be
                demotivating?
              </li>
            </ol>
            <h3> Step 2: Reflection and "Deeper Research" </h3>
            <ol id="step">
              <li>
                {' '}
                1. Try to find common themes among your interests. Identify the various themes. Try
                to bring common themes down to a number between four and six. Draw a mindmap of your
                interests, categorised according to the themes you identify. Continue working on
                this for the rest of the week.
              </li>
              <li>
                {' '}
                2. Now it’s time to evaluate your motivation. Looking at the sorts of things that
                motivate you and that demotivate you, can you establish a single common theme?
                Where’s your overall motivation coming from? What makes you get up in the morning?
                Why do you want to apply to a top university, at the end of the day? Try to
                formulate a single theme by describing it in writing.
              </li>
            </ol>
            <h3> Step 3: Evaluation </h3>
            <ol id="step">
              <li>
                {' '}
                1. To complete and document this step,{' '}
                <a href="https://austria.projectaccess.co/s/Level-1-Assignment.pptx">
                  please use this power point presentation
                </a>{' '}
                and fill it in. You will be required to upload the completed document to proceed to
                the next level
              </li>
              <li>
                {' '}
                2. Based on your reflection, you should now be in a position of reflective
                self-knowledge: you know what drives you and what motivates you in a systematic
                fashion. You know several “clusters” of interests that you have. You also have an
                understanding of a single common theme underlying your motivation.
              </li>
              <li> 3. Now, it’s time to transcend the stage you’re at right now and think about</li>
              <li>
                {' '}
                Which interests you want to develop in addition to the interests you already have?{' '}
              </li>
              <li>
                {' '}
                How to improve your “motivational story”. That is, you want to think about wat sort
                of overall theme you want to motivate you.
              </li>
              <li>
                {' '}
                Maybe there are some interests or aspects to your motivation you don’t want to
                pursue further?
              </li>
            </ol>
            <h3> Step 4: Relating it all to your Way </h3>
            <ol id="step">
              <li>
                {' '}
                1. Use{' '}
                <a href="https://austria.projectaccess.co/s/My-Criteria-for-Top-Uni-Choices.xlsx">
                  this excel sheet
                </a>{' '}
                to complete step 4
              </li>
              <li>
                {' '}
                2. Now it’s time to think about how your interests and motivation should affect your
                choice of where to apply for university. You should take some time to get clear on
                the following:
              </li>
              <li>
                {' '}
                1. Which interests do you want to pursue at uni? Consider all your interests. For
                instance, if you like a particular sport and you want to continue playing this sport
                at uni, you should add this to your list. Similarly, if, for instance, certain
                aspects of “social life” are important to you, you should add them to the list. You
                will spend a long time at uni, so it’s important it’s the overall best choice, not
                just the best choice to further one particular interest.
              </li>
              <li>
                {' '}
                2. What ambitions do you want to pursue by going to uni? For instance, you might
                have specific career aspirations? Or you might want to study a specific question?
                It’s clear that your choice might change. It’s just important that you think about
                the ambitions you have now, at this point in your life.{' '}
              </li>
              <li>
                {' '}
                3. What side constraints do you have? That is, what are absolute no-gos for you?
                Maybe you don’t want to live in a big city? Or the opposite? Maybe you want a
                certain sort of cultural programme.
              </li>
              <li>
                {' '}
                To complete these step, try to formulate factors or criteria that are important to
                you for choosing a university-subject combination. Include your interests, your
                passion, and your motivation. Also include other things that are important to you
                for selecting a university-subject combination. For instance, whether it’s important
                to you to live in a city or live on a campus. Find all criteria that are relevant to
                you for choosing a university-subject combination! By defining all your criteria,
                you should have a basis for making a rational decision about your university choice
              </li>
              <li>
                {' '}
                Finally, think about how important each of these aspects is for you. Give them a
                ranking ;)
              </li>
            </ol>
          </div>
        </div>

        <button className="submission-button">
          <a id="submission" href="https://airtable.com/shr1MiQgV6PV95kqC">
            Submit Work
          </a>
        </button>
      </div>
    </div>
  );
}

export default ModuleOneContent;
