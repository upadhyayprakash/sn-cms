import { useState, ReactNode } from 'react';
import ReactDOM from 'react-dom'

import markdownStyles from './markdown-styles.module.css'
import ReactMarkdown from 'react-markdown/with-html';


import SyntaxHighlighter from 'react-syntax-highlighter';
import { solarizedDark, dark, arta, dracula, github, googlecode, grayscale, monokaiSublime, monokai, sunburst, xcode, vs, zenburn } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import ImageGallery from './sn-image-gallery';

import Button from '@material-ui/core/Button';

type Props = {
  content: string
}

type ListProps = {
  children: ReactNode
  ordered: boolean
}

type TableProps = {
  children: ReactNode
}

type HtmlNodeProps = {
  element: any
}

type LinkProps = {
  children: ReactNode
  title: string
  target: string
  href: string
}

type ImageProps = {
  src: string
  alt: string
  title: string
}

type CodeBlockProps = {
  value: string
  language: string
}

type LinkReferenceProps = {
  children: ReactNode
  href: string
}

type BlockquoteProps = {
  children: ReactNode
  ordered: boolean
}

const PostBody = ({ content }: Props) => { 
  
  const images: any[] = []
  // [
  //   {src: '//placekitten.com/1500/500', title: 'Title-1', caption: <h1>Caption-1</h1>},
  //   {src: '//placekitten.com/4000/3000', title: 'Title-2', caption: 'Caption-2'},
  //   {src: '//placekitten.com/800/1200', title: 'Title-3', caption: 'Caption-3'},
  //   {src: '//placekitten.com/1500/1500', title: 'Title-4', caption: 'Caption-4'},
  // ];

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  }

  const handleImageClick = (photoIndex:any) => {
    setIsOpen(true);
    setPhotoIndex(photoIndex);
  }

  const List = ({ children, ...props }: ListProps) => {
    return props.ordered? (
        <ol className="sn-list">
          {children}
        </ol>
      ): (
        <ul className="sn-list">
          {children}
        </ul>
      );
  }

  const Table = ({ children, ...props }: TableProps) => {
    return (
      <figure className="figure">
        <div className="sn-table">
          <table className="sn-table" {...props}>
            {children}
          </table>
        </div>
        <figcaption>Table-2: Sample Table with Caption</figcaption>
      </figure>
    );
  }

  const HtmlNode = ({ ...props }: HtmlNodeProps) => {
    let imgProps:any = null;

    if(props.element.props.children[1])
    {
      let index = images.length;
      imgProps = props.element.props.children[1].props;
      (imgProps.className === 'sn-image') && images.push({src: imgProps.src, title: imgProps.title, caption: 'Sample Caption'});

      return (
        <div className="sn-html" onClick={() => (imgProps.className === 'sn-image') && handleImageClick(index)}>
          { props.element }
        </div>
      );
    }
    else
      return (
        <div className="sn-html">
          { props.element }
        </div>
      );
  }
  
  const Link = ({ children, ...props }: LinkProps) => {
    return (
      <a href={props.href} className="sn-link" target={props.target} title={props.title} >{children}</a> 
    );
  }
  
  const Image = ({ ...props }: ImageProps) => {
    return (
        <img src={props.src} alt={props.alt} title={props.title} />
    );
  }
  
  const ImageReference = ({ ...props }: ImageProps) => {
    return (
        <img src={props.src} alt={props.alt} title={props.title}  />
    );
  }
  
  const CodeBlock = ({ ...props }: CodeBlockProps) => {
    return (
      <SyntaxHighlighter className="shadow sn-code" language={props.language} style={monokaiSublime}>
        {props.value}
      </SyntaxHighlighter>
    );
  }
  
  const LinkReference = ({children, ...props}: LinkReferenceProps) => (
    <a href={props.href} >{children}</a>
  )
  
  const BlockQuote= ({children, ...props}: BlockquoteProps) => {
    return (  // CUSTOM BLOCKQUOTE
      <blockquote className="blockquote blockquote-custom bg-white p-5 shadow rounded">
          <div className="blockquote-custom-icon shadow-sm"><i className="fa fa-quote-left text-white"></i></div>
          <div className="mb-0 mt-2">{children}</div>
          <footer className="blockquote-footer pt-4 mt-4 border-top">Author Name from
              <cite title="Source Title" className="ml-1"><a href="#">Organization</a></cite>
          </footer>
      </blockquote>
      // END
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* <div onClick={() => setIsOpen(true)} className="p-4" style={{backgroundColor:'red', borderBlockColor:'green', borderWidth:5}}></div> */}
      <ReactMarkdown
        className={markdownStyles['markdown']}
        source={content}
        escapeHtml={false}
        linkTarget="_blank"
        renderers={{
          code: CodeBlock,
          blockquote: BlockQuote,
          linkReference: LinkReference,
          image: Image,
          imageReference: ImageReference,
          link: Link,
          parsedHtml: HtmlNode,
          list: List,
          table: Table
        }}
      />

      {isOpen && <ImageGallery images={images} handleToggle={handleToggle} index={photoIndex} />}
    </div>
  )
}

export default PostBody
