/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
import React, { PropTypes } from 'react';
import styles from './LiuCheng.less';
import withStyles from '../../../decorators/withStyles';
import Link from '../../../utils/Link';

import $ from 'jquery';

@withStyles(styles)
class LiuCheng {
    render() {
        return (
            <section className="LiuChengSection">
            	<h2>申请流程</h2>
            	<section className="LiuCheng">
	                <div className="bg1">

	                </div>
	                <div className="bg2"></div>
	                <div className="bg3"></div>
	            </section>
	            <section className="LiuChengFont">
	            	<div className="skrollable">
	                    <div className="section-roadmap-elt-icon left">
						</div>
						<div className="right inblDv">
	                    	<p className="inbl">我要申请</p>
	                	</div>
	                	<div className="clear"></div>
	                </div>
	            	<div className="skrollable">
		            	<div className="section-roadmap-elt-icon left">
							<span className="icon-evaluation"></span>
						</div>
						<div className="right inblDv">
	                    	<p className="inbl">留学评估</p>
	                    	<p>量身定制留学方案在美国公立高中留学，学生的语言能力会有很大的提高，因而很多学生家长想当然的认为这是考取托福、SAT高分的最佳途径。量身定制留学方案在美国公立高中留学，学生的语言能力会有很大的提高，因而很多学生家长想当然的认为这是考取托福</p>
	                	</div>
	                	<div className="clear"></div>
	                </div>
	                <div className="skrollable">
	                	<div className="section-roadmap-elt-icon left">
							<span className="icon-evaluation"></span>
						</div>
						<div className="right inblDv">
	                    	<p className="inbl">留学评估</p>
	                    	<p>量身定制留学方案在美国公立高中留学，学生的语言能力会有很大的提高，因而很多学生家长想当然的认为这是考取托福、SAT高分的最佳途径。量身定制留学方案在美国公立高中留学，学生的语言能力会有很大的提高，因而很多学生家长想当然的认为这是考取托福</p>
	                	</div>
	                	<div className="clear"></div>
                    </div>
	                <div className="skrollable">
	                	<div className="section-roadmap-elt-icon left">
							<span className="icon-evaluation"></span>
						</div>
						<div className="right inblDv">
	                    	<p className="inbl">材料准备</p>
	                    	<p>严格控制申请材料</p>
	                	</div>
	                	<div className="clear"></div>
	                </div>
	            </section>
	            <section className="LiuChengFont LiuChengFontB">
	            	<div className="skrollable">
	            		<div className="section-roadmap-elt-icon left">
							<span className="icon-evaluation"></span>
						</div>
						<div className="right inblDv">
	                    	<p className="inbl">材料审核</p>
	                    	<p>量身定制留学方案在美国公立高中留学，学生的语言能力会有很大的提高，因而很多学生家长想当然的认为这是考取托福、SAT高分的最佳途径。量身定制留学方案在美国公立高中留学，学生的语言能力会有很大的提高，因而很多学生家长想当然的认为这是考取托福</p>
	                	</div>
	                	<div className="clear"></div>
	                </div>
	                <div className="skrollable">
	                	<div className="section-roadmap-elt-icon left">
							<span className="icon-evaluation"></span>
						</div>
						<div className="right inblDv">
	                    	<p className="inbl">签证申请</p>
	                    	<p>严格审核签证申请</p>
	                	</div>
	                	<div className="clear"></div>
	                </div>
	                <div className="skrollable">
	                <div className="section-roadmap-elt-icon left">
							<span className="icon-evaluation"></span>
						</div>
						<div className="right inblDv">
	                    	<p className="inbl">留学圆梦</p>
	                    	<p>留学圆梦</p>
	                	</div>
	                	<div className="clear"></div>
	                </div>
	            </section>
            </section>
        );
    }
    componentDidMount() {
        $(window).scroll(function(){

        	if($(document).scrollTop() >= $(".LiuCheng").offset().top){
       //  		if($(".LiuCheng .bg1").height() < 687 ){
	      //   		$(".LiuCheng .bg1").height() + 10;
	    		// 	console.log(1); 
	    		// }else{
	    		// 	console.log(false);
	    		// }
        	}
        });
    }
}

export default LiuCheng;
/**
 * Created by XiaoKangZheng on 2015/7/28.
 */
