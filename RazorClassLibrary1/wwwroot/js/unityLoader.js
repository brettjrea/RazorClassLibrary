window.loadUnityGame = (buildUrl) => {
    var loaderUrl = buildUrl + "/src.loader.js";
    var config = {
        dataUrl: buildUrl + "/src.data",
        frameworkUrl: buildUrl + "/src.framework.js",
        codeUrl: buildUrl + "/src.wasm",
        streamingAssetsUrl: "StreamingAssets",
        companyName: "DefaultCompany",
        productName: "YourProductName",
        productVersion: "1.0",
    };

    var container = document.getElementById('unity-container');
    var canvas = document.getElementById('unity-canvas');
    if (!canvas) {
        console.error("Canvas element 'unity-canvas' not found.");
        return;
    }
    canvas.style.width = "100%";
    canvas.style.height = "100%";

    var script = document.createElement("script");
    script.src = loaderUrl;
    script.onload = () => {
        createUnityInstance(canvas, config).then((unityInstance) => {
            console.log('Unity instance loaded!');
            // Additional setup if required
        }).catch((error) => {
            console.error("Error loading Unity instance: ", error);
        });
    };
    document.body.appendChild(script);
}
