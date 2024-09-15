
const canvas = document.getElementById("canvasCalc");

const drawCanvas = (event) => {
    const pixStep = 5;
    const lineHeightPx = 2;

    const ctx = canvas.getContext("2d");
    ctx.font = "15px courier";
    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);

    const kanaalpeil = Number(document.getElementById("kanaalpeil").value);
    const waterstand = Number(document.getElementById("waterstand").value);
    const brughoogte = Number(document.getElementById("brughoogte").value);
    const diepte = Number(document.getElementById("diepte").value);
    const kielhoogte = Number(document.getElementById("kielhoogte").value);
    const kruiphoogte = Number(document.getElementById("kruiphoogte").value);
    const speling = Number(document.getElementById("speling").value);

    const doorvaarhoogte = brughoogte + kanaalpeil - waterstand;
    const doorvaardiepte = diepte - kanaalpeil + waterstand;

    const napHeightPx = (height / 4 * 3);
    const kpHeightPx = napHeightPx + (kanaalpeil * -1 * pixStep);
    const currentHeightPx = napHeightPx + (waterstand * -1 * pixStep);
    const bridgeheightPx = kpHeightPx + (brughoogte * -1 * pixStep);
    const depthPx = kpHeightPx + (diepte * pixStep);
    const totalBoathHeightPx = (kruiphoogte + kielhoogte) * pixStep;
    const boatHeightPx =  kruiphoogte * pixStep;

    if ((doorvaardiepte - speling) >= kielhoogte && (doorvaarhoogte - speling) >= kruiphoogte)
        ctx.fillStyle = "green";
    else
        ctx.fillStyle = "red";

    ctx.beginPath();
    ctx.ellipse(300, currentHeightPx - boatHeightPx, 50, totalBoathHeightPx, 0, 0, Math.PI, false);
    ctx.fill();

    ctx.fillStyle = "red";
    ctx.fillRect(0,napHeightPx,width,lineHeightPx);
    ctx.fillText("NAP (vast gegeven)", 0, napHeightPx);

    ctx.fillStyle = "blue";
    ctx.fillRect(0,currentHeightPx,width,lineHeightPx);
    ctx.fillText("werkelijke waterstand", 0, currentHeightPx);

    ctx.fillStyle = "green";
    ctx.fillRect(0, kpHeightPx,width,lineHeightPx);
    ctx.fillText("kanaalpeil", 0, kpHeightPx);

    ctx.fillStyle = "purple";
    ctx.fillRect(0, bridgeheightPx, width,lineHeightPx);
    ctx.fillText("brughoogte", 0, bridgeheightPx);

    ctx.fillStyle = "brown";
    ctx.fillRect(0, depthPx, width,lineHeightPx);
    ctx.fillText("bodem", 0, depthPx);

    ctx.fillStyle = "blue";
    ctx.fillRect(600, bridgeheightPx, lineHeightPx, currentHeightPx - bridgeheightPx);
    ctx.fillText("doorvaarhoogte: " + doorvaarhoogte, 600, bridgeheightPx + ((currentHeightPx - bridgeheightPx) / 2));

    ctx.fillRect(550, depthPx, lineHeightPx, currentHeightPx - depthPx);
    ctx.fillText("doorvaardiepte: " + doorvaardiepte, 550, depthPx + ((currentHeightPx - depthPx) / 2));

    ctx.fillStyle = "green";
    ctx.fillRect(450, bridgeheightPx, lineHeightPx, kpHeightPx - bridgeheightPx);
    ctx.fillText("brughoofte: " + brughoogte, 450, bridgeheightPx + ((kpHeightPx - bridgeheightPx) / 2));

    ctx.fillRect(400, depthPx, lineHeightPx, kpHeightPx - depthPx);
    ctx.fillText("diepte: " + diepte, 400, depthPx + ((kpHeightPx - depthPx) / 2));
}

const submitBtn = document.getElementById("submitBtn");
submitBtn.onclick = drawCanvas;