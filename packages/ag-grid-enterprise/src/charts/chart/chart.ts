import { Scene } from "../scene/scene";
import { Group } from "../scene/group";
import { Series } from "./series/series";
import { Padding } from "../util/padding";

export abstract class Chart<D, X, Y> {
    readonly scene: Scene = new Scene();

    constructor(parent: HTMLElement = document.body) {
        this.scene.parent = parent;
        this.scene.root = new Group();
    }

    protected _padding: Padding = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
    };
    set padding(value: Padding) {
        this._padding = value;
        this.layoutPending = true;
    }
    get padding(): Padding {
        return this._padding;
    }

    set size(value: [number, number]) {
        this.scene.size = value;
        this.layoutPending = true;
    }

    /**
     * The width of the chart in CSS pixels.
     */
    set width(value: number) {
        this.scene.width = value;
        this.layoutPending = true;
    }
    get width(): number {
        return this.scene.width;
    }

    /**
     * The height of the chart in CSS pixels.
     */
    set height(value: number) {
        this.scene.height = value;
        this.layoutPending = true;
    }
    get height(): number {
        return this.scene.height;
    }

    private layoutCallbackId: number = 0;
    set layoutPending(value: boolean) {
        if (value) {
            if (!this.layoutCallbackId) {
                this.layoutCallbackId = requestAnimationFrame(this._performLayout);
            }
        } else if (this.layoutCallbackId) {
            cancelAnimationFrame(this.layoutCallbackId);
            this.layoutCallbackId = 0;
        }
    }

    /**
     * Only `true` while we are waiting for the layout to start.
     * This will be `false` if the layout has already started and is ongoing.
     */
    get layoutPending(): boolean {
        return !!this.layoutCallbackId;
    }

    private readonly _performLayout = () => {
        this.layoutCallbackId = 0;
        this.performLayout();
    };

    abstract performLayout(): void;

    protected _series: Series<D, X, Y>[] = [];
    set series(values: Series<D, X, Y>[]) {
        this._series = values;
    }
    get series(): Series<D, X, Y>[] {
        return this._series;
    }
}
