export class WorkOrderProposal {
  public BudgetYear: string = undefined;
  public TypeCode: string = undefined;
  public EstimatedCompletion: string = undefined;
  public Department: string = undefined;
  public Division: string = undefined;
  public ScheduleType: string = undefined;
  public Schedule: string = undefined;
  public Item: string = undefined;
  public Organization: string = undefined;
  public Location: string = undefined;
  public County: string = undefined;
  public PropertyTax: string = undefined;
  public SubmittedByEmployee: string = undefined;
  public ProjectManager: string = undefined;
  public GLAccount: string = undefined;

  public isType = true;
  public isGeneral = true;
  public isDescription = true;
  public isInvestment = true;
  public isExpenditures = true;
  public isRetirement = true;
  public isMaintenance = true;
  public isClearing = true;


  protected getModelName(): string {
    return "WorkOrderProposal";
  }
  public resetTabs(): void {
   this.isType = true;
   this.isGeneral = true;
   this.isDescription = true;
   this.isInvestment = true;
   this.isExpenditures = true;
   this.isRetirement = true;
   this.isMaintenance = true;
   this.isClearing = true;
  }
}
