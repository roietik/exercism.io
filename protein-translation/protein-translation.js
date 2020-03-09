//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// const rna = "AUGUUUUCU";
const tab = [
  { codon: "AUG", protein: "Methionine" },
  { codon: "UUU", protein: "Phenylalanine" },
  { codon: "UUA", protein: "Leucine" },
  { codon: "UCU", protein: "Serine" },
  { codon: "UAU", protein: "Tyrosine" },
  { codon: "UGU", protein: "Cysteine" },
  { codon: "UGG", protein: "Tryptophan" }
];

export const translate = rna => {
  if (!rna) {
    return [];
  }
  // throw new Error("Remove this statement and implement this function");
  const codons = rna.match(/.{1,3}/g);
  let res = [];
  tab.map(el => {
    codons.map(codon => {
      if (el.codon === codon) {
        res = [...res, el.protein];
      }
    });
  });
  return res;
};
