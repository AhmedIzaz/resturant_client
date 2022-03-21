import { Grid } from "@material-ui/core";
import { motion } from "framer-motion";
import React from "react";
import { useStateValue } from "../../../StateProvider/StateContext";
import { useNavigate } from "react-router-dom";
import "./featuredFoodsStyles.css";
const FeaturedFoods = () => {
  const [state] = useStateValue();
  const navigate = useNavigate();
  return (
    <motion.div
      whileInView={{ y: [100, 1], opacity: [0, 1] }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="featured_food_container"
    >
      <h3>Top Items</h3>
      <>
        {state.featured_foods.length == 0 ? (
          <p>Loading....</p>
        ) : (
          <Grid container spacing={3}>
            {state.featured_foods.map((item) => (
              <Grid
                style={{ margin: "auto" }}
                item
                xs={10}
                sm={6}
                md={4}
                lg={3}
              >
                <div
                  onClick={() => navigate(`/food-description/${item._id}`)}
                  className="featured_food_item"
                >
                  <div className="featured_food_item_image_container">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <h5>{item.name}</h5>
                  <p>{item.description.slice(0, 30)} ... </p>
                </div>
              </Grid>
            ))}
          </Grid>
        )}
      </>
    </motion.div>
  );
};

export default FeaturedFoods;
