import React, { useEffect, useState } from "react";
import { Typography, Popover } from "antd";
import axios from "axios";
import "./favorite.css";
import { useSelector } from "react-redux";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../Config";

const { Title } = Typography;

function FavoritePage() {
  const user = useSelector(state => state.user);

  const [Favorites, setFavorites] = useState([]);
  const [Loading, setLoading] = useState(true);
  let variable = { userFrom: localStorage.getItem("userId") };

  useEffect(() => {
    fetchFavoredMovie();
  }, []);

  const fetchFavoredMovie = () => {
    axios.post("/api/favorite/getFavoredMovie", variable).then(response => {
      if (response.data.success) {
        console.log(response.data.favorites);
        setFavorites(response.data.favorites);
        setLoading(false);
      } else {
        alert("Failed to get subscription videos");
      }
    });
  };

  const onClickDelete = (movieId, userFrom) => {
    const variables = {
      movieId: movieId,
      userFrom: userFrom
    };

    axios.post("/api/favorite/removeFromFavorite", variables).then(response => {
      if (response.data.success) {
        fetchFavoredMovie();
      } else {
        alert("Failed to Remove From Favorite");
      }
    });
  };

  const renderCards = Favorites.map((favorite, index) => {
    const content = (
      <div>
        {favorite.moviePost ? (
          <img src={`${IMAGE_BASE_URL}${POSTER_SIZE}${favorite.moviePost}`} />
        ) : (
          "no image"
        )}
      </div>
    );

    return (
      <tr key={index}>
        <Popover content={content} title={`${favorite.movieTitle}`}>
          <td>{favorite.movieTitle}</td>
        </Popover>

        <td>{favorite.movieRunTime} mins</td>
        <td>
          <button
            onClick={() => onClickDelete(favorite.movieId, favorite.userFrom)}
          >
            {" "}
            Remove{" "}
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div style={{ width: "85%", margin: "3rem auto" }}>
      <Title level={2}>Phim Đã Thích</Title>
      <hr />
      {user.userData && !user.userData.isAuth ? (
        <div
          style={{
            width: "100%",
            fontSize: "2rem",
            height: "500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <p>
            Hãy <a href="/login">Đăng Nhập</a>
          </p>
        </div>
      ) : (
        !Loading && (
          <table>
            <thead>
              <tr>
                <th>Tên Phim</th>
                <th>Thời Lượng</th>
                <th>Bỏ Thích</th>
              </tr>
            </thead>
            <tbody>{renderCards}</tbody>
          </table>
        )
      )}
    </div>
  );
}

export default FavoritePage;
