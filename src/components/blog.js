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
              <h1>todo</h1>
          </div>

      )
    } else if(this.state.activeTab === 2) {
        return(
            <div>
                <h1>todo</h1>
            </div>


        )
    } else if(this.state.activeTab === 3) {
      return (
        <div>
            <h1>todo</h1>
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
