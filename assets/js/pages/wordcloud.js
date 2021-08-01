var list = [
    "Pizza",
    "Pasta",
    "Vegan",
];
var word_list=[]
for (var i=0; i<list.length; i++)
    word_list.push({text:list[i], weight:(Math.random() * 4 + 10)})

$(document).ready(function() {$("#wordcloud2").jQCloud(word_list);});