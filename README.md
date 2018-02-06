# UI5-IconTabBar-Chrome55Fix

This class adds fixes the Chrome 55+ PointerEvents bug for sap.m.IconTabBar
The newly introduced PointerEvents and touchevents aren't fired correctly

Use:
```xml
<mvc:View controllerName="nl.barrydam.Example" xmlns="sap.m" xmlns:bd="nl.barrydam.m"
	>
	<Page>
		<content>
			<bd:IconTabFilter>
				<bd:items>
					<IconTabFilter text="test">
						<content>
						<!-- content etc -->
						</content>
					</IconTabFilter>
				</bd:items>
			</bd:IconTabFilter>
		</content>
	</Page>
</mvc:View>

```