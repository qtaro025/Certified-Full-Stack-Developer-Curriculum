for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log(`Skipping i = ${i}`);
    continue;
  }
  console.log(`i: ${i}`);
}
