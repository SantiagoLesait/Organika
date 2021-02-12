import React from "react";

import Link from "@material-ui/core/Link";
import { Facebook, Twitter, LinkedIn } from "@material-ui/icons";
import Fab from "@material-ui/core/Fab";
import useStyles from "./footerStyles";
import { Typography } from "@material-ui/core";

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.footer} style={{ display: "inline-flex" }}>
      <div className={classes.marginF}>
        <Link href="/">
          <img
            src={
              "https://cdn.shopify.com/s/files/1/0355/5537/7197/files/org_social_sharing_8758d57b-ad6d-4c16-9b1d-a10513087388.jpg?v=1592515189"
            }
            alt="logo"
            style={{ height: "50px" }}
          />
        </Link>
      </div>
      <div className={classes.marginF}>
        <Typography className={classes.marginB}>Data cia.</Typography>
        <Typography className={classes.marginB}>
          © 2020 | Todos los derechos reservados.
        </Typography>
      </div>
      <div className={classes.marginF}>
        <Link href="https://www.linkedin.com/school/soyhenry//">
          <Fab
            size="small"
            color="primary"
            aria-label="edit"
            className={classes.marginB}
          >
            <LinkedIn />
          </Fab>
        </Link>

        <Link href="https://www.facebook.com/HENRY-108437840594440/">
          <Fab
            size="small"
            color="primary"
            aria-label="edit"
            className={classes.marginB}
          >
            <Facebook />
          </Fab>
        </Link>

        <Link href="https://twitter.com/soyhenry_ok">
          <Fab
            size="small"
            color="primary"
            aria-label="edit"
            className={classes.marginB}
          >
            <Twitter />
          </Fab>
        </Link>
      </div>
    </div>
  );
}
