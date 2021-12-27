import React from "react";
import { Avatar, Box, Divider, Rating } from "@mui/material";
import { review } from "../../utils/data/review2/Review2";

const CustomerReviews = () => {
  return (
    <Box
      style={{
        boxShadow: " 4px 4px 10px rgba(0, 0, 0, 0.15)",
        borderRadius: "20px",
        padding: "20px 50px",
        width: "50%",
      }}
    >
      <p style={{ fontSize: "24px", fontWeight: 500, whiteSpace: "nowrap" }}>
        Отзывы клиентов
      </p>
      {review.map((item, index) => (
        <Box>
          <Divider style={{ border: "1px solid #808080", width: "100%" }} />
          <Box style={{ display: "flex", alignItems: "center" }}>
            <Avatar
              style={{ width: "70px", height: "70px", marginTop: "10px" }}
            />
            <Box style={{ paddingLeft: "20px" }}>
              <p style={{ fontWeight: "500" }}>{item.name}</p>
              <Rating />
            </Box>
          </Box>
          <p style={{ fontSize: "20px", color: "#000000" }}>
            Даже самое хмурое питерское утро может стать необыкновенно приятным,
            если завтракать в "Название". Большой полезный завтрак не только
            очень красиво, но еще и оооочень вкусно и сытно. А с десертами
            беда...невозможно остановиться на одном (выбор широкий, и все очень
            вкусные) И такое чудесное облако в интерьере!
          </p>
          <p style={{ fontSize: "24px", color: "#808080",marginBottom: "10px" }}>Баллы</p>
          <Rating style={{ marginBottom: "40px" }} />
        </Box>
      ))}
    </Box>
  );
};

export default CustomerReviews;
