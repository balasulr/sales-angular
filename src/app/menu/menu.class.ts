export class Menu { // Always have to export class when create a class
    display: string; // Properties to make menu work & will show up like anchor tags show up.
    route: string;

    constructor(display: string, route: string) {
        this.display = display; // declares that display exists & above sets the properties
        this.route = route;
    }
}