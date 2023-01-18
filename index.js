const semver = require("semver");

const compareTargetArray = ["0.14.0-preview.5", "0.14.0"];
const compareTargetPreview = ">=0.14.0-preview";
const compareTagetRelease = ">=0.14";

for (const i of compareTargetArray) {
    const compareTargetPreviewResult = semver.satisfies(i, compareTargetPreview);
    console.log(`compare ${i} and ${compareTargetPreview} is ${compareTargetPreviewResult}`);

    const compareTagetReleaseResult = semver.satisfies(i, compareTagetRelease);
    console.log(`compare ${i} and ${compareTagetRelease} is ${compareTagetReleaseResult}\n`);
}

