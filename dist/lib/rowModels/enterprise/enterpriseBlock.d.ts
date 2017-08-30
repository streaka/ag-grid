// ag-grid-enterprise v13.0.1
import { NumberSequence, RowNodeBlock, RowNode, RowBounds } from "ag-grid";
import { EnterpriseCache, EnterpriseCacheParams } from "./enterpriseCache";
export declare class EnterpriseBlock extends RowNodeBlock {
    private context;
    private rowRenderer;
    private columnController;
    private valueService;
    private gridOptionsWrapper;
    private logger;
    private displayIndexStart;
    private displayIndexEnd;
    private blockTop;
    private blockHeight;
    private params;
    private parentCache;
    private parentRowNode;
    private level;
    private groupLevel;
    private groupField;
    private rowGroupColumn;
    private nodeIdPrefix;
    constructor(pageNumber: number, parentRowNode: RowNode, params: EnterpriseCacheParams, parentCache: EnterpriseCache);
    private createNodeIdPrefix();
    protected createIdForIndex(index: number): string;
    getNodeIdPrefix(): string;
    getRow(displayRowIndex: number): RowNode;
    private setBeans(loggerFactory);
    protected init(): void;
    protected setDataAndId(rowNode: RowNode, data: any, index: number): void;
    protected loadFromDatasource(): void;
    protected createBlankRowNode(rowIndex: number): RowNode;
    private createGroupKeys(groupNode);
    isPixelInRange(pixel: number): boolean;
    getRowBounds(index: number, virtualRowCount: number): RowBounds;
    getRowIndexAtPixel(pixel: number, virtualRowCount: number): number;
    setDisplayIndexes(displayIndexSeq: NumberSequence, virtualRowCount: number, nextRowTop: {
        value: number;
    }): void;
    private createLoadParams();
    isDisplayIndexInBlock(displayIndex: number): boolean;
    isBlockBefore(displayIndex: number): boolean;
    getDisplayIndexStart(): number;
    getDisplayIndexEnd(): number;
    getBlockHeight(): number;
    getBlockTop(): number;
}
