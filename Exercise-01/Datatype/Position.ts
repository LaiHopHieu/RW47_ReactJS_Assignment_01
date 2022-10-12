class Position{
    private positionId: number;
    private positionName: string;

	constructor($positionId: number, $positionName: string) {
		this.positionId = $positionId;
		this.positionName = $positionName;
	}

    /**
     * Getter $positionId
     * @return {number}
     */
	public get $positionId(): number {
		return this.positionId;
	}

    /**
     * Getter $positionName
     * @return {string}
     */
	public get $positionName(): string {
		return this.positionName;
	}

    /**
     * Setter $positionId
     * @param {number} value
     */
	public set $positionId(value: number) {
		this.positionId = value;
	}

    /**
     * Setter $positionName
     * @param {string} value
     */
	public set $positionName(value: string) {
		this.positionName = value;
	}

}