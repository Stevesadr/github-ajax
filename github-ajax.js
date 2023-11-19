function ajaxApi(){
    var xhr=new XMLHttpRequest();
    xhr.open("GET","https://api.github.com/users",true);
    xhr.onload=function(){
        if(xhr.status==200){
            var users=JSON.parse(this.responseText);
            for (const key in users) {
                var ul=document.createElement("ul");
                ul.className="box"
                var li = document.createElement("li");
                li.className = "list-group-item user-item text-left";
                ul.append(li);
                var img = document.createElement("img");
                img.className = "img-circle img-user img-thumbnail";
                img.setAttribute("src", users[key].avatar_url);
        
                li.append(img);
                var div=document.createElement("div");
                li.append(div);
                var h3 = document.createElement("h3");
                var a = document.createElement("a");
                a.innerText = users[key].login;
                h3.append(a);
        
                li.after(h3);
                
               
                

        
                document.querySelector(".body").append(ul);
            }
        }
    }
    xhr.send();
}
ajaxApi();