import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell} from 'react-mdl';
//import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

import YouTube from 'react-youtube';
//import ReactPlayer from 'react-player'
import { Player } from 'video-react';
import "./video-react.css"; // import css



class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
      this.opts = {
          height: '670',
          width: '100%',
          playerVars: { // https://developers.google.com/youtube/player_parameters
              autoplay: 0
          }
      };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
        return (
            <div>
                <h3>TED Analysis 1: Liv Boeree: 3 lessons on decision making from a poker champion</h3>

                <Player
                    playsInline
                    src="https://download.ted.com/talks/LivBoeree_2018U.mp4"
                />

                <p>The title of the TED talk I watched is, Liv Boeree: 3 lessons on decision making from a poker champion.
                    Here is the URL:&nbsp;<a className="external"
                                             href="https://www.ted.com/talks/liv_boeree_3_lessons_on_decision_making_from_a_poker_champion/discussion"
                                             target="_blank" rel="noreferrer noopener">https://www.ted.com/talks/liv_boeree_3_lessons_on_decision_making_from_a_poker_champion/discussion<span
                        className="screenreader-only">&nbsp;(Links to an external site.)</span><span
                        className="ui-icon ui-icon-extlink ui-icon-inline" title="Links to an external site."><span
                        className="screenreader-only">Links to an external site.</span></span></a>.</p>
                <p>I chose this talk because first of all, the title is very pretty to me. I myself often have difficulties
                    making decisions in my daily life and sometimes I do make bad decisions that make me regret. So I saw
                    the title, I thought, wow, I could get 3 lessons that will help me make better decision from now on, how
                    wonderful is that!</p>
                <p>So in this aspect, I think the talk is extremely successful, that is, to use an attractive title,
                    claiming that it may help us with probably common difficult situations. And the given number, 3, I think
                    is pretty nice, it&rsquo;s not too much and the audience might get excited (as I do): I&rsquo;ll
                    remember and practice these 3 pieces of advice, then I can make good decisions. I think this given us
                    something to expect.</p>
                <p>At the beginning of the talk, the speaker introduced herself as a professional poker player (so we also
                    got that from the title, &lsquo;poker champion&rsquo;). This is important and persuasive since it makes
                    us tend to believe that if a person can win the championship in a decision-making game like poker, then
                    he/she must be good at making decisions.</p>
                <p>The first lesson the speaker talked about is &lsquo;luck&rsquo;. In this part, what she did well was that
                    she gave good examples and explained it with a hand-drawn figure, which is pretty efficient and saves a
                    lot of words to really explain it. And I like the way she talked about her experience: her tone, her
                    face expression, and the way she presented made me feel in the same situation she was in. However, as
                    she talked more and close to the end of this lesson about luck, I started to lose focus and realize that
                    she was only emphasizing that luck can play a role in our decision making, but she was not actually
                    giving any ideas on how to deal with it, how to take luck into consideration when we make decisions. In
                    this case, what she said is just common sense and we don&rsquo;t get much new from it.</p>
                <p>I think this first lesson is a bad turning point, I started to doubt if she will give any effective
                    advice even in the rest of the talk.</p>
                <p>In the following part, the speaker talked about quantification. I found this part pretty convincing.
                    Especially she mentioned that in poker games, it often requires a lot of quantitative analysis, which is
                    also helpful in daily life. She did a great job showing a survey on how people think when they hear the
                    word &ldquo;probably&rdquo; and plotting the result in an easy-to-understand figure. What&rsquo;s more,
                    she was being humorous when she gave examples of things that might happen right now (like 25% chance of
                    losing train of thought during a TED talk). This is good, by making the audience really think about why
                    this is important and how we might to think and deal with it.</p>
                <p>The third lesson is about intuition. She started with examples that the most successful poker players
                    actually do NOT rely on intuition but on careful and slow analysis. This is intriguing. Later she
                    divided the decision we have to make into two categories: the one that we have lots of daily experience
                    with and the ones that are really big, like career path and marriage. For the first one, the speaker
                    suggested that we can trust our gut but for the later, we instead need proper investigations and
                    analysis. I think by doing this, the speaker is being convincing and helpful.</p>
                <p>Lastly, the speaker summarized the talk by changing some of the popular words on twitter/facebook to
                    integrate her own ideas. This is funny and comprehensive. People are more likely to remember words like
                    these.</p>
                <p>Overall, I think, the talk is well-presented, the speaker did a great job delivering the ideas she got in
                    poker games but found useful in our daily life. She used a lot of examples and comparisons from the
                    poker games, which was her expertise, making her advice more convincing. Though, I found that in the
                    first part about luck, she did not do the best job to keep attracting the audience. But anyway, I think
                    I learned something in the later part of the talk, which is already good enough for a 6-minute talk.</p>
            </div>
        )
    } else if(this.state.activeTab === 1) {
      return (
          <div>

                  <h3>TED Analysis 2: Prosanta Chakrabarty: Four Billion Years of Evolution in Six Minutes</h3>

                  <Player
                      playsInline
                      src="https://download.ted.com/talks/ProsantaChakrabarty_2018U.mp4"
                  />

              <p><a className="external"
                    href="https://www.ted.com/talks/prosanta_chakrabarty_four_billion_years_of_evolution_in_six_minutes/discussion#t-108761"
                    target="_blank" rel="noreferrer noopener">https://www.ted.com/talks/prosanta_chakrabarty_four_billion_years_of_evolution_in_six_minutes/discussion#t-108761<span
                  className="screenreader-only">&nbsp;(Links to an external site.)</span></a></p>
              <p>This talk, Four Billion Years of Evolution in Six Minutes, was given by Prosanta Chakrabarty. I chose
                  this one because evolution is also a topic of my great interest and I would like to see how someone
                  could explain or offer new ideas about this topic in six minutes.</p>
              <p>Overall, the presentation was pretty well-prepared with nice slides, which looked simple, neat, and
                  good enough to illustrate the points the presenter was trying to make. And the idea that &ldquo;life
                  does not evolve in a line and it does not end with us&rdquo; and &ldquo;understanding this will change
                  us the way we treat other life and each other on earth&rdquo;, were indeed inspiring and
                  think-provoking to some extent.</p>
              <p>However, there are some points that make me believe it might not be a very effective talk.</p>
              <p>First of all, the talk started with a question followed by a very confusing answer to it. Basically,
                  the speaker argued that we are fish instead of monkeys that&rsquo;s why monkeys still exist. This
                  logic seems ridiculous and does not stand well to me. Well, it is true that we all vertebrates,
                  including monkeys and us of course, evolved from fish, that does NOT deny the fact that we, human
                  beings, evolve from the monkey. And then the speaker started to claim that he taught
                  the &ldquo;largest&rdquo; class about evolution in the United States and how should his students
                  understand &ldquo;we are fish&rdquo;. This sounds like kind of bragging to me. Later I checked online
                  about the speaker. He is an associate professor in Louisiana State University and
                  his &ldquo;obsession&rdquo; with fish came from the fact that he did some research on fish, which,
                  however, does not help to explain the point he is making and yet to be very distracting. To make
                  things worse, this &ldquo;fish&rdquo; theory can be very misleading for those who do not already know
                  evolution well: okay, if we came from fish, why are there still fish, just like the speaker asked
                  about the monkey in the beginning? He was making the question more complicated instead of more simple
                  by using the &ldquo;fish&rdquo; theory.</p>
              <p>Later, he started to claim that &ldquo;most of us have been taught evolution wrong&rdquo;, which I
                  think is a bad way to deliver new ideas. He could have said that he is offering a new way to look at
                  evolution instead of judging most of the others &ldquo;wrong&rdquo;. And to make things worse, later
                  in his talk, he did not actually offer significantly improving ways to really think about evolution
                  differently, which raises questions to the qualification of this talk.</p>
              <p>And another issue with this talk is that he failed to make his intention of his talk at the very
                  beginning of the speech, leaving the audience wondering what on earth he is trying to say till the
                  middle of the speech.</p>
              <p>The voice of the speaker was kind of lack of enthusiasm and energy, might be a little bit too cool and
                  calm.</p>
              <p>On the good side, the speaker did a great job when he illustrates how evolution happens from a single
                  cell organism from about 3 billion years ago (starting from 2:35 in the video). The animation of the
                  slides was great and the speaker really made it easy to follow and understand.</p>
              <p>In summary, I would rate the talk as follows:</p>
              <p><strong>Organization (7/10)</strong>:&nbsp;Not very clear, maybe a very brief outline/introduction
                  would help.</p>
              <p><strong>Analysis (6/10)</strong>:&nbsp;Not really like the way speaker approached to the topic,
                  especially the &ldquo;fish&rdquo; part, it&rsquo;s just distracting, confusing, and relatively
                  irrelevant to the point.</p>
              <p><strong>Language (9/10):&nbsp;</strong>The language in the talk was clear and accurate, though could be
                  more vivid.</p>
              <p><strong>Material (9/10):</strong>&nbsp;The speaker did good preparation and used very helpful visuals.
                  However, he did not use much evidence or cite from sources of authority, which I think is important in
                  a scientific talk.</p>
              <p><strong>Delivery(10/10):&nbsp;</strong>At ease and confident</p>
              <p><strong>Voice(8/10):</strong>&nbsp;Could be more enthusiastic and energetic.</p>
          </div>

      )
    } else if(this.state.activeTab === 3) {
        return(
            <div>
                <h1>todo</h1>
            </div>


        )
    } else if(this.state.activeTab === 2) {
      return (
        <div>
            <h3>TED Analysis 3: Marc Koska: 1.3M Reasons to Re-invent the syringe</h3>

            <Player
                playsInline
                src="https://pc.tedcdn.com/talk/stream/2009G/Blank/MarcKoska_2009G-1500k.mp4"
            />

            <p><a className="external" href="https://www.ted.com/talks/marc_koska_the_devastating_toll_of_syringe_reuse"
                  target="_blank" rel="noreferrer noopener">https://www.ted.com/talks/marc_koska_the_devastating_toll_of_syringe_reuse<span
                className="screenreader-only">&nbsp;(Links to an external site.)</span><span
                className="ui-icon ui-icon-extlink ui-icon-inline" title="Links to an external site."><span
                className="screenreader-only">Links to an external site.</span></span></a></p>
            <p>This talk, 1.3M Reasons to Re-invent the syringe, was given by Marc Koska. This is kind of an elevator
                pitch, trying to promote his new invention, a newly designed syringe that would break when being reused
                and thus prevent disease transmission from re-using.</p>
            <p>Overall, I think this is a very good elevator pitch. Though it is less than 5 minutes long, it includes
                everything people need to understand why and how this new invention would be useful.</p>
            <p>The speaker started with a simple and direct topic: syringes are being reused and causing troubles. He
                used very good comparisons of the infection and death caused by malaria and syringe reuse. This is a
                very good way to draw the audience's&rsquo; attention and makes it much easier for us to have a basic
                idea about the scale of the problem. Though it will be much better if he could offer the source of these
                data, either in his speech or in the slides.</p>
            <p>Following the numbers, the speaker showed us several examples about people getting infected by reused
                syringes, including the kids in a picture. I think this is a very smart way to excite people&rsquo;s
                empathy and really start to care about the issue. Later the speaker showed more photos and videos,
                demonstrating that it is indeed a very serious and urgent problem to solve in various countries. By
                using these visual aids, the speak was able to prove that the problem was ubiquitous and lots of
                innocent children, who would be the future of the world were being hurt by this issue. &nbsp;</p>
            <p>Lastly, the speaker got a chance to show everyone his product. In his demonstration, he proved that his
                newly designed syringes were very easy to use, and they look exactly the same as classical syringes.
                However, the new syringes would break when the users try to reuse it. I have to say, it is a very simple
                modification, but it is very brilliant and really solve the problem. And by comparison, the speaker
                showed us that the cost was also minimum and definitely worth it, considering how it can prevent
                transmission of diseases.</p>
            <p>&nbsp;</p>
            <p><strong>Organization (10/10)</strong>:&nbsp;Very clear arrangement of the topics, first draw
                people&rsquo;s attention by showing how serious the problem is, followed by situations where the
                problems exist. Finally, he proposed a way (product) to solve the problem and proved its effectiveness.
            </p>
            <p><strong>Analysis (10/10):&nbsp;</strong>He analyzed the problem in very engaging and appropriate ways and
                made his central ideas very clear and easy to follow.</p>
            <p><strong>Language (10/10):</strong>&nbsp;Clear and accurate.</p>
            <p><strong>Material (9/10):&nbsp;</strong>I really like the numbers, photos, and videos used by the speaker,
                which totally did their jobs well. The materials presented are sufficient and properly distributed. The
                only shortcoming was that the speaker failed to tell the source of the numbers and some of the
                multimedia materials.</p>
            <p><strong>Delivery (10/10):&nbsp;</strong>The speaker delivered the speech very well. He used very
                appropriate gestures and body language, showing his confidence, his caring about the problem and the
                people who were being affected by the problem. And those non-verbal languages matched with his voice and
                verbal language well.</p>
            <p><strong>Voice (10/10):&nbsp;</strong>The speaker&rsquo;s voice was pleasant, being calm but also caring,
                which fit with the topic well. And he did great job controlling his volume and rate of his speech, to
                match the content of his words.</p>

        </div>
      )
    } else if(this.state.activeTab === 4) {
        return (
            <div>
                <h3>Multimedia Speech 1: Lightening Talk at Lab Day of Protocol Labs (08-10-2018)</h3>
                <YouTube
                    videoId="KONGvS51cJM"
                    opts={this.opts}
                    onReady={this._onReady}
                />
            </div>
        )
    }

  }






  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>TED Analysis 1</Tab>
          <Tab>TED Analysis 2</Tab>
          <Tab>TED Analysis 3</Tab>
          <Tab>Multimedia Speech 1</Tab>
          <Tab>Multimedia Speech 2</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Blog;
