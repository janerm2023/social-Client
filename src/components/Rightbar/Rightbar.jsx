import "./Rightbar.css";
import Online from "../Online/Online";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="suggestionWrapper">
        <div className="suggest">
          <h4>Suggestion for you</h4>
          <ul className="suggestLists">
            <li className="suggestList">
              <div className="rightSuggest">
                <img
                  src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
                <span>John Smith</span>
              </div>
              <div className="btns">
                <button className="follow">Follow</button>
                <button className="dismiss">Dismiss</button>
              </div>
            </li>
            <li className="suggestList">
              <div className="rightSuggest">
                <img
                  src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
                <span>John Smith</span>
              </div>
              <div className="btns">
                <button className="follow">Follow</button>
                <button className="dismiss">Dismiss</button>
              </div>
            </li>
          </ul>
        </div>
        <div className="latest">
          <h4>Latest Activities</h4>
          <ul className="activities">
            <li className="activity">
              <div className="activitiesImg">
                <img
                  src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
                <span>
                  <b>John Smith</b> changed their cover picture
                </span>
              </div>

              <span>1 min ago</span>
            </li>
            <li className="activity">
              <div className="activitiesImg">
                <img
                  src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
                <span>
                  <b>John Smith</b> liked a comment
                </span>
              </div>

              <span>1 min ago</span>
            </li>
            <li className="activity">
              <div className="activitiesImg">
                <img
                  src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
                <span>
                  <b>John Smith</b> liked a post
                </span>
              </div>

              <span>1 min ago</span>
            </li>
            <li className="activity">
              <div className="activitiesImg">
                <img
                  src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
                <span>
                  <b>John Smith</b> shared a post
                </span>
              </div>

              <span>1 min ago</span>
            </li>
          </ul>
        </div>

        <div className="online">
          <h4>Online Friends</h4>

          <ul>
            <Online />
            <Online />
            <Online />
            <Online />
            <Online />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
