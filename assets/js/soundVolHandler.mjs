    // Volume Bar Handlers
    const bgmRange = document.querySelector(".bgm-volume input[type=range]");
    const sfxRange = document.querySelector(".sfx-volume input[type=range]");

    const bgmBarHoverBox = document.querySelector(".bgm-volume .bar-hoverbox");
    const sfxBarHoverBox = document.querySelector(".sfx-volume .bar-hoverbox");

    const bgmFill = document.querySelector(".bgm-volume .bar .bar-fill");
    const sfxFill = document.querySelector(".sfx-volume .bar .bar-fill");


    $('.volume-range.bgmVal').attr("value", bgmVol * 100)
    $('.volume-range.sfxVal').attr("value", sfxVol * 100)


    // Function to set the value for the BGM volume bar
    const setBGMValue = (value) => {
        bgmFill.style.width = value + "%";
        bgmRange.value = value; // Update the range input value
        bgmRange.dispatchEvent(new Event("change")); // Trigger change event
        click.play();
    };

    // Function to set the value for the SFX volume bar
    const setSFXValue = (value) => {
        sfxFill.style.width = value + "%";
        sfxRange.value = value; // Update the range input value
        sfxRange.dispatchEvent(new Event("change")); // Trigger change event
        click.play();
    };

    export function exportBgmVal() {
        return bgmRange.value/100;
    }

    // Function to update volume values in real-time
    export function updateVolumeValues() {
        
        const bgmVolumeValue = bgmRange.value;
        const sfxVolumeValue = sfxRange.value;
        const bgmVolCalc = bgmRange.value/100;
        const sfxVolCalc = sfxRange.value/100;
        bgm.volume(bgmVolCalc);
        select.volume(sfxVolCalc);
        click.volume(sfxVolCalc);
        enter.volume(sfxVolCalc);
        cancel.volume(sfxVolCalc);
        confirm.volume(sfxVolCalc);
        confirm2.volume(sfxVolCalc);
        
        console.log("BGM " + bgmVolumeValue / 100 + " | SFX " + sfxVolumeValue / 100)
        // Update the content of the BGM volume display element
        const bgmVolumeDisplay = document.querySelector(".bgm-volume .volVal");
        bgmVolumeDisplay.textContent = bgmVolumeValue;

        // Update the content of the SFX volume display element
        const sfxVolumeDisplay = document.querySelector(".sfx-volume .volVal");
        sfxVolumeDisplay.textContent = sfxVolumeValue;
        //checkVol();
    };
    updateVolumeValues();

    // Default values
    setBGMValue(bgmVol * 100);
    setSFXValue(sfxVol * 100);

    // Add event listeners for volume changes
    bgmRange.addEventListener("change", updateVolumeValues);
    sfxRange.addEventListener("change", updateVolumeValues);

    // Separate setValue functions for BGM and SFX
    const setBGMFill = (value) => {
        bgmFill.style.width = value + "%";
        bgmRange.value = value;
        bgmRange.dispatchEvent(new Event("change"));
    };

    const setSFXFill = (value) => {
        sfxFill.style.width = value + "%";
        sfxRange.value = value;
        sfxRange.dispatchEvent(new Event("change"));
    };

    const calculateFill = (e, setFillFunction) => {
        let offsetX = e.offsetX;

        if (e.type === "touchmove") {
            offsetX = e.touches[0].pageX - e.touches[0].target.offsetLeft;
        }

        const width = e.target.offsetWidth - 30;

        setFillFunction(
            Math.max(
                Math.min(
                    (offsetX - 15) / width * 100.0,
                    100.0
                ),
                0
            )
        );
    };


    let barStillDown = false;

    bgmBarHoverBox.addEventListener("touchstart", (e) => {
        barStillDown = true;
        calculateFill(e, setBGMFill);
    }, true);

    bgmBarHoverBox.addEventListener("touchmove", (e) => {
        if (barStillDown) {
            calculateFill(e, setBGMFill);
        }
    }, true);

    bgmBarHoverBox.addEventListener("mousedown", (e) => {
        barStillDown = true;
        calculateFill(e, setBGMFill);
    }, true);

    bgmBarHoverBox.addEventListener("mousemove", (e) => {
        if (barStillDown) {
            calculateFill(e, setBGMFill);
        }
    });

    sfxBarHoverBox.addEventListener("touchstart", (e) => {
        barStillDown = true;
        calculateFill(e, setSFXFill);
    }, true);

    sfxBarHoverBox.addEventListener("touchmove", (e) => {
        if (barStillDown) {
            calculateFill(e, setSFXFill);
        }
    }, true);

    sfxBarHoverBox.addEventListener("mousedown", (e) => {
        barStillDown = true;
        calculateFill(e, setSFXFill);
    }, true);

    sfxBarHoverBox.addEventListener("mousemove", (e) => {
        if (barStillDown) {
            calculateFill(e, setSFXFill);
        }
    });

    bgmBarHoverBox.addEventListener("wheel", (e) => {
        const newValue = +bgmRange.value + e.deltaY * -0.03;
        setBGMValue(Math.max(Math.min(newValue, 100.0), 0));
    });

    sfxBarHoverBox.addEventListener("wheel", (e) => {
        const newValue = +sfxRange.value + e.deltaY * -0.03;
        setSFXValue(Math.max(Math.min(newValue, 100.0), 0));
    });

    document.addEventListener("mouseup", (e) => {
        barStillDown = false;
    }, true);

    document.addEventListener("touchend", (e) => {
        barStillDown = false;
    }, true);