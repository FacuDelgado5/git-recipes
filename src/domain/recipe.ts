export class Recipe {
  _name!: string;
  _category?: string;
  _description?: string;
  _prepTime!: number;

  constructor(aName: string, aPrepTime: number) {
    this.name = aName;
    this.prepTime = aPrepTime
  }

  get name(): string {
    return this._name;
  }

  set name(aName: string) {
    const trimmed = aName.trim();
    if (trimmed.length === 0) {
      throw new Error("El nombre de la receta no puede ser vacío.");
    }
    this._name = trimmed;
  }

  get category(): string | undefined {
    return this._category;
  }

  set category(aCategory: string) {
    this._category = aCategory;
  }

  get description(): string | undefined {
    return this._description;
  }

  set description(aDescription: string) {
    this._description = aDescription;
  }

  get prepTime(): number {
    return this._prepTime;
  }

  set prepTime(aPrepTime: number) {
    if (aPrepTime < 0 || !aPrepTime) throw new Error("El tiempo de preparacion debe ser >= 0")
    this._prepTime = aPrepTime;
  }

  toString(): string {
    return `Receta: ${this.name} - categoría: ${this.category} - descripcion: ${this.description} - tiempo de preparacion: ${this.prepTime}`;
  }
}
