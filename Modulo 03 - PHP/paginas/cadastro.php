<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tela Cadastro</title>
    <link rel="stylesheet" href="../estilos/styleCadastrar.css">
</head>
<body>

    <header>
        <nav>

            <ul>

            <li><a href="../index.htmlt">Home</a></li>
            <li><a href="#">Cadastrar Usuário</a></li>
            <li><a href="verificarUsuário.php">Procurar Usuário</a></li>

            </ul>  
        </nav>
    </header>

    <main>
        <form action="cadastro.php" method="POST">
            <H2>Cadastro de Aluno</H2>

            <label for="nome">Nome:</label>
            <input type="text" name="nome" id="nome">

            <label for="sobrenome">Sobrenome:</label>
            <input type="text" name="sobrenome" id="sobrenome">

            <label for="email">E-mail:</label>
            <input type="text" name="email" id="email">

            <label for="curso">Selecione o curso:</label>
            <select name="curso" id="curso">
                <option value="ads">Análise e Desenvolvimento de Sistemas</option>
                <option value="es">Engenharia de Software</option>
                <option value="si">Sistema da Informação</option>
                <option value="cc">Ciências da Computação</option>
            </select>

            <input type="submit" value="Cadastrar"></input>

</form>
    </main>

    <?php

       try {
        if($_SERVER["REQUEST_METHOD"] == "POST"){
            include("../conexao/conexao.php");
            
            $nome = $_POST["nome"];
            $sobrenome = $_POST["sobrenome"];
            $email = $_POST["email"];
            $curso = $_POST["curso"];
 
            //criar
            $hoje = new DateTime();
            $id = $hoje->format("Ym") . rand(100,999);
 
            $sql = "INSERT INTO usuários (id, nome, sobrenome, email, curso) values (?,?,?,?,?)";
            $stmt = $conn->prepare($sql);
 
            $stmt->bind_param("issss",$id,$nome,$sobrenome,$email,$curso);
            $stmt->execute();
 
            echo "div class='mensagem sucesso'>Usuário cadastrado com sucesso </div>";
            $stmt->close();
            $conn->close();

       }
    }

    catch (mysqli_sql_exception $e){

        if (str_contains($e->getMessage(), "Duplicate entry")) { //verifica se na variavel existe a mensagem duplicate
            echo "<div class='mensagem erro'>E-mail já está cadastrado </div>";
        } 
        else {
            echo "<div class='mensagem erro'>Erro ao cadastrar, tente novamente mais tarde</div>";
            
        }
        
    }
    
        

?>
    
</body>
</html>
