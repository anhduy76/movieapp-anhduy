import React from "react";
import { Descriptions } from "antd";

function MovieInfo(props) {
  const { movie } = props;

  return (
    <Descriptions title="Thông Tin Bộ Phim" bordered>
      <Descriptions.Item label="Tiêu Đề">
        {movie.original_title}
      </Descriptions.Item>
      <Descriptions.Item label="Ngày Khởi Chiếu">
        {movie.release_date}
      </Descriptions.Item>
      <Descriptions.Item label="Doanh Thu">{movie.revenue}</Descriptions.Item>
      <Descriptions.Item label="Thời Lượng">{movie.runtime}</Descriptions.Item>
      <Descriptions.Item label="Điểm Số">
        {" "}
        {movie.vote_average}
      </Descriptions.Item>
      <Descriptions.Item label="Số Lượt Bình Chọn">
        {movie.vote_count}
      </Descriptions.Item>
    </Descriptions>
  );
}

export default MovieInfo;
