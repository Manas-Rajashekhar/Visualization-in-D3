window.onload = function(){
    
    var svgCanvas = d3.select("svg")
        .attr("width", 1000)                                                                                                        //setup canvas
        .attr("height", 800)
    .attr("class", "svgCanvas");                                                                                                                                                
    d3.json("data.json", function(d){                                                                       //load json file
        for( key in d.links){
            for (i in d.nodes){
                for( j in d.nodes){                                                                                                 //calculate x1 , x2 , y1 , y2 for lines and append
                if (d.links[key]["node01"] == d.nodes[i]["id"] && d.links[key]["node02"] == d.nodes[j]["id"]){
                    d.links[key]["x1"] = d.nodes[i]["x"]
                    d.links[key]["y1"] = d.nodes[i]["y"]
                    d.links[key]["x2"] =d.nodes[j]["x"]
                    d.links[key]["y2"] =d.nodes[j]["y"]
                }
                }
            }
        }
    var plot= svgCanvas.selectAll("line")
        plot.data(d.links).enter()
        .append("line")
        .style("stroke", "red")
        .style("stroke-width", function(d){
            return d.amount*0.015;
        })
        .attr("x1", function(d){                                                    // draw links
            return d.x1;
        })
        .attr("y1", function(d){
            return d.y1;
        })
        .attr("x2", function(d){
            return d.x2;
        })
        .attr("y2",function(d){
            return d.y2;
        })  
        
        
        var array=[];
        var amount_1=0;
        var amount_2=0;
        var amount_3=0;
        var amount_4=0;                                                                     //create variables for count 
        var amount_5=0;
        var amount_6=0;
        var amount_7=0;
        var amount_8=0;
        var amount_9=0;
        var amount_10=0;
        var amount_11=0;
        var node_1= 0;
        var node_2= 0;
        var node_3= 0;
        var node_4= 0;
        var node_5= 0;
        var node_6= 0;
        var node_7= 0;
        var node_8= 0;
        var node_9= 0;
        var node_10= 0;
        var node_11= 0;
        
        for(key in d.links){
                if (d.links[key]["node01"] == "site01" || d.links[key]["node02"] == "site01"){
                    amount_1 = amount_1 + d.links[key]["amount"];
                    node_1=node_1 +1;
                };
                if (d.links[key]["node01"] == "site02" || d.links[key]["node02"] == "site02"){
                    amount_2 = amount_2 + d.links[key]["amount"];
                    node_2=node_2 +1
                };
                if (d.links[key]["node01"] == "site03" || d.links[key]["node02"] == "site03"){
                    
                    amount_3 = amount_3 + d.links[key]["amount"];
                    node_3=node_3 +1;
                };
                if (d.links[key]["node01"] == "site04" || d.links[key]["node02"] == "site04"){            // calculate total trading amount and no of conected nodes for each node
                    amount_4 = amount_4 + d.links[key]["amount"];
                    node_4=node_4 +1;
                };
                if (d.links[key]["node01"] == "site05" || d.links[key]["node02"] == "site05"){
                    amount_5 = amount_5 + d.links[key]["amount"];
                    node_5=node_5 +1;
                };
                if (d.links[key]["node01"] == "site06" || d.links[key]["node02"] == "site06"){
                    amount_6 = amount_6 + d.links[key]["amount"];
                    node_6=node_6 +1;
                };
                if (d.links[key]["node01"] == "site07" || d.links[key]["node02"] == "site07"){
                    amount_7 = amount_7 + d.links[key]["amount"];
                    node_7=node_7 +1;
                };
                if (d.links[key]["node01"] == "site08" || d.links[key]["node02"] == "site08"){
                    amount_8 = amount_8 + d.links[key]["amount"];
                    node_8=node_8 +1;
                };
                if (d.links[key]["node01"] == "site09" || d.links[key]["node02"] == "site09"){
                    amount_9 = amount_9 + d.links[key]["amount"];
                    node_9=node_9 +1;
                };
                if (d.links[key]["node01"] == "site10" || d.links[key]["node02"] == "site10"){
                    amount_10 = amount_10 + d.links[key]["amount"];
                    node_10=node_10 +1;
                };
                if (d.links[key]["node01"] == "site11" || d.links[key]["node02"] == "site11"){
                    amount_11 = amount_11 + d.links[key]["amount"];
                    node_11=node_11 +1;
                };
            }
        
                for( key in d.nodes){
                    if(d.nodes[key]["id"]== "site01"){
                        d.nodes[key]["r"]=amount_1;
                        d.nodes[key]["links"]=node_1;
                    }
                      if(d.nodes[key]["id"]== "site02"){
                        d.nodes[key]["r"]=amount_2;
                          d.nodes[key]["links"]=node_2;
                    }
                    if(d.nodes[key]["id"]== "site03"){
                        d.nodes[key]["r"]=amount_3;                                    // append above data to d.nodes to their respective sites
                        d.nodes[key]["links"]=node_3;
                    }
                    if(d.nodes[key]["id"]== "site04"){
                        d.nodes[key]["r"]=amount_4;
                        d.nodes[key]["links"]=node_4;
                    }
                    if(d.nodes[key]["id"]== "site05"){
                        d.nodes[key]["r"]=amount_5;
                        d.nodes[key]["links"]=node_5;
                    }
                    if(d.nodes[key]["id"]== "site06"){
                        d.nodes[key]["r"]=amount_6;
                        d.nodes[key]["links"]=node_6
                    }
                    if(d.nodes[key]["id"]== "site07"){
                        d.nodes[key]["r"]=amount_7;
                        d.nodes[key]["links"]=node_7;
                    }
                    if(d.nodes[key]["id"]== "site08"){
                        d.nodes[key]["r"]=amount_8;
                        d.nodes[key]["links"]=node_8;
                    }
                    if(d.nodes[key]["id"]== "site09"){
                        d.nodes[key]["r"]=amount_9;
                        d.nodes[key]["links"]=node_9
                    }
                    if(d.nodes[key]["id"]== "site10"){
                        d.nodes[key]["r"]=amount_10;
                        d.nodes[key]["links"]=node_10;
                    }
                    if(d.nodes[key]["id"]== "site11"){
                        d.nodes[key]["r"]=amount_11;
                        d.nodes[key]["links"]=node_11;
                    }
                    
                    
                }
        
        
                 var div = d3.select("body").append("div")	
                .attr("class", "tooltip")				
                .style("opacity", 0);
                var s = svgCanvas.selectAll("circle")
                .data(d.nodes).enter()                                                                      //create circles
                .append("circle")
                .attr("cx",function(d){
                    return d.x;})
                .attr("cy",function(d){
                    return d.y;})
                .attr("r",function(d){
                    return d.r *0.03;})
                
               
                
                
                .on("mouseover", function(thisElement, index){
                svgCanvas.selectAll("circle")
                    .attr("opacity", 0.1); // grey out all circles
                d3.select(this)
                    .attr("opacity", 1) 
                    svgCanvas.selectAll("line")                                                                         // on hover , display information related to site
                    .attr("opacity",function(k){
                        if(k.node01 == thisElement.id || k.node02 == thisElement.id){
                            return 1;
                        }
                        else{
                            return 0.1;
                        }
                    })
                        
                          
                         div.transition()		
                .duration(0)		
                .style("opacity", 1);		
            div	.html(thisElement.id + "<br/>" + "amount :" + thisElement.r + "<br/>"+ "links:" + thisElement.links)
                .style("left", (thisElement.x))		
                .style("top", (thisElement.y) )
                    })
            
                .on("mouseout", function(thisElement, index){
              // restore all circles to normal mode
                svgCanvas.selectAll("circle") 
                    .attr("opacity", 1);
                    svgCanvas.selectAll("line")                                                                     // if pointer is not pointing get rid of information
                    .attr("opacity", 1)
                    div.transition()		
                .duration(0)		
                .style("opacity", 0);	
                    
                
            });
                
                
              
            
            

})
}
            
        
        
                
                
        
        
         
        
        

            
                        
            