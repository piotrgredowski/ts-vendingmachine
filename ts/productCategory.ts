abstract class ProductCategory {
	protected imgPath = "img/";

	name: string;
	abstract getImageUrl(): string;
}

class SodaCategory extends ProductCategory {
	name = "Soda"
	getImageUrl() {
		return this.imgPath + "SodaCan.png"
	}
}

class CandyCategory extends ProductCategory {
	name = "Candy"
	getImageUrl() {
		return this.imgPath + "Candy.png"
	}
}

class CandyBarCategory extends ProductCategory {
	name = "Candy bar"
	getImageUrl() {
		return this.imgPath + "CandyBar.png"
	}
}

class ChipsCategory extends ProductCategory {
	name = "Chips"
	getImageUrl() {
		return this.imgPath + "Chips.png"
	}
}

class NutsCategory extends ProductCategory {
	name = "Nuts"
	getImageUrl() {
		return this.imgPath + "Nuts.png"
	}
}

export { ProductCategory, SodaCategory, NutsCategory, ChipsCategory as PotatoChipsCategory, CandyCategory, CandyBarCategory}
