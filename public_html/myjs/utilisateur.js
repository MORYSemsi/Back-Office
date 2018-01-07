var urlPath="http://localhost:8080/";

function findUtilisateur() {
    $.ajax({
        url: urlPath + "utilisateurs",
        async: true,
        complete: function (data) {
            console.log(data.responseJSON);
            var utilisateurs = data.responseJSON;
            utilisateurs=utilisateurs._embedded.utilisateurs;
			$("#listUtilisateurs").html("");
			for (var i = 0;i < utilisateurs.length; i++) {
			$("#listUtilisateurs").append("<td>"+utilisateurs[i].nom+"</td>");
			$("#listUtilisateurs").append("<td>"+utilisateurs[i].prenom+"</td>");
			$("#listUtilisateurs").append("<td>"+utilisateurs[i].email+"</td>");
			}
        }
    });
}