import React from "react";
import Header from "./Header";
import HeaderNav from "./HeaderNav";

function Homepage() {
    return (
        <div>
            <Header />
            <HeaderNav />
            <div className="homepage">
                <big>
                    <h1 className="homepage-title">
                    Discover the Best in Gaming at NC Games: Your Ultimate Social Hub
                    </h1>

                    <br></br>
                    
                    <p className="homepage-info">
                    Get ready to dive into the world of gaming with NC Games, your one-stop destination for social gaming content and conversations. Browse through our collection of reviews and get an insight into the best games available.
                    </p>

                    <br></br>

                    <p className="homepage-info">
                    To fully engage with our community and make the most of your experience, we highly recommend logging in. Simply click the "Login" button located in the upper-right corner, select your username, and you're all set!
                        <br></br>
                    </p>

                    <br></br>

                    <p className="homepage-info">
                    Once logged in, you'll have access to all the features that make NC Games the go-to place for gaming enthusiasts. Filter reviews by category, read through individual reviews, leave comments, and like other reviews and comments.
                    </p>

                    <br></br>
                    
                    <p className="homepage-info">
                    Join the conversation and share your thoughts on the latest games. We hope you have a great time visiting our site!
                    </p>
                </big>
            </div>
        </div>
    );
}

export default Homepage;
