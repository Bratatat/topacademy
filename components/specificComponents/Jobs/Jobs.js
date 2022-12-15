import React, { Component } from "react";
import css from "./Jobs.module.scss";
import { storyblokEditable } from "@storyblok/react";
import {RichTextToHTML} from "../../../functions/storyBlokRichTextRenderer";

export default class Jobs extends Component {

     constructor(props) {
         super(props);
     }

     render() {
		return (
			<>
				<div {...storyblokEditable(this.props.blok)} className={css["jobitem"]}>
					<div className={css["jobheader"]}>
						<span className={css["jobtitle"]}>• {this.props.blok.title}</span>
					</div>
					<div className={css["jobitemcontent"]}>
						{RichTextToHTML({ document: this.props.blok.description })}
					</div>
                    <button className={css["jobbutton"]} onClick={e => {
                        e.preventDefault();
                        window.open(`mailto:${this.props.blok.email}`);
                    }}>Apply Today!</button>
				</div>
			</>
		);
	}
 }