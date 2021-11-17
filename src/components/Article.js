import React, {Component} from 'react';
import{withRouter} from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser'; //, { processNodes, convertNodeToElement, htmlparser2 }
import Story from './Story';

class Article extends Component{

  constructor(props) {
		super(props);
	  this.state = {
      pageView: this.props.pageView,
      articleSelection: this.props.articleSelection,
    }
		// console.log('%c PROPS at ARTICLE COMPONENTS constructor', 'color:black;background:magenta;padding:6px;border:1px dashed black', this.props)
  }

  renderTextCopy = () => {
    const html = (this.props.story.textCopy.length === 0) ? <Story /> : `${this.props.story.textCopy}`;
    return (
      <div className="text-copy">
        <div className={`text-body ${this.props.story.articleId}`}>{ ReactHtmlParser(html) }</div>
      </div>
    )
  }

  render() {
    const {
      articleId, articleImage1, articleImage2, articleImage3, articleImage4, articleImage5, articleImage6, articleImageProf, articleImageMain, articleImageAltText1, articleImageAltText2, articleImageAltText3, articleImageAltText4, articleImageAltText5,articleImageAltText6, articleImageAltTextProf, articleImageAltTextMain, articleCaption1, articleCaption2, articleCaption3, articleAuthor, articleImageCred, articleHeadlineOne, articleHeadlineTwo, articleHeadlineThree
    } = this.props.story;

    //check if image exists, assign class name to "none" it is...
    let articleImage1Class = (articleImage1.length === 0)? 'none' : `${articleId}`;
    let articleImage2Class = (articleImage2.length === 0)? 'none' : `${articleId}`;
    let articleImage3Class = (articleImage3.length === 0)? 'none' : `${articleId}`;
    let articleImage4Class = (articleImage4.length === 0)? 'none' : `${articleId}`;
    let articleImage5Class = (articleImage5.length === 0)? 'none' : `${articleId}`;
    let articleImage6Class = (articleImage6.length === 0)? 'none' : `${articleId}`;
    // let articleImageProfClass = (articleImageProf.length === 0)? 'none' : `${articleId}`;

    //check if images or caption on row exists, if not assign class 'none' to hide it
    let row1ClassName = (articleImage1.length === 0 && articleImage2.length  === 0)? 'none' : 'row1';
    let row2ClassName = (articleImage3.length === 0 && articleImage4.length  === 0)? 'none' : 'row2';
    let row3ClassName = (articleImage5.length === 0 && articleImage6.length  === 0)? 'none' : 'row3';
    let caption1ClassName = (articleCaption1.length === 0) ? "none" : "caption";
    let caption2ClassName = (articleCaption2.length === 0) ? "none" : "caption";
    let caption3ClassName = (articleCaption3.length === 0) ? "none" : "caption";
    let imgCreditClassName = (articleImageCred.length === 0) ? "none" : "image-credits";
    let authorCreditClassName = (articleAuthor.length === 0) ? "none" : "author-credits";
    let pictClassName = (row1ClassName === "none") ? "none" : "pict-area";
    let creditsClassName = (articleImageCred.length === 0) ? "none" : "credits";

    return (
    <div className={`article ${articleId}`}>
      <div className='article-content'>
        <div className='container'>
          <img src={`${articleImageMain}`}
            alt={`${articleImageAltTextMain}`}
            title={`${articleAuthor}`}
            className="article-main-photo"
          />
          <div className='overlay'></div>
        </div>

        <div className="article-header">
          <div className="author-frame">
            <img
              className="author"
              src={`${articleImageProf}`}
              alt={`${articleImageAltTextProf}`}
              title={`${articleAuthor}`}
            />
          </div>
          <div className="article-headline">
            <div className="headline-lead">{articleHeadlineOne} </div>
            <div className="headline">{articleHeadlineTwo} </div>
            <div className="subhead">{ ReactHtmlParser(articleHeadlineThree)} </div>
          </div>
        </div>

        {this.renderTextCopy()}

        <div className={`picture-area ${pictClassName} ${articleId} `}>
          <div className={`row ${row1ClassName}`}>
            <img src={`${articleImage1}`} alt={articleImageAltText1} title={articleImageAltText1} className={`articleImageLeft ${articleImage1Class}`} />
            <img src={`${articleImage2}`} alt={articleImageAltText2} title={articleImageAltText2} className={`articleImageRight ${articleImage2Class}`} />
          </div>
          <span className={caption1ClassName}>{articleCaption1}</span>

          <div className={`row ${row2ClassName}`}>
            <img src={`${articleImage3}`} alt={articleImageAltText3} title={articleImageAltText3} className={`articleImageLeft ${articleImage3Class}`} />
            <img src={`${articleImage4}`} alt={articleImageAltText4} title={articleImageAltText4} className={`articleImageRight ${articleImage4Class}`} />
          </div>
          <span className={caption2ClassName}>{articleCaption2}</span>

          <div className={`row ${row3ClassName}`}>
            <img src={`${articleImage5}`} alt={articleImageAltText5} title={articleImageAltText5} className={`articleImageLeft ${articleImage5Class}`} />
            <img src={`${articleImage6}`} alt={articleImageAltText6} title={articleImageAltText6} className={`articleImageRight ${articleImage6Class}`} />
          </div>
          <span className={caption3ClassName}>{articleCaption3}</span>
        </div>

        <div className={`${creditsClassName} ${articleId}`}>
          <span className={imgCreditClassName}>{ReactHtmlParser(articleImageCred)}</span>
          <span className={authorCreditClassName}>{ReactHtmlParser(articleAuthor)}</span>
        </div>

      </div>
    </div>
    )
  }

}
export default withRouter(Article);
