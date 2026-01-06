function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5iXco0LBe7k":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="bgmagica.mp3";
audio.load();
audio.play();
audio.volume=0.7;
}

