import "./NewsLetter.css"

const NewsLetter = () => {
  return (
    <div className="newsletter">
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newsletter and get updated</p>
        <input type="email" placeholder="Enter your email address" />
     
       <button>Subscribe</button>
       
    </div>
  )
}

export default NewsLetter